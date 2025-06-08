// src/lib/analytics-events.ts

// Base properties that all events share
interface BaseEventProperties {
  user_id?: string;
  session_id: string;
  timestamp?: number;
  device_id?: string;
  platform?: 'web' | 'mobile';
  location?: string;
  ip_address?: string;
}

// Event-specific property groups
interface AuthSignupEvent {
  event_type: 'auth:signup';
  signup_method: 'email' | 'google' | 'github';
  is_first_session: boolean;
}

interface AuthLoginEvent {
  event_type: 'auth:login';
  login_method: 'email' | 'social';
  session_duration_previous?: number;
}

interface AuthSessionRecoveredEvent {
  event_type: 'auth:session_recovered';
  recovery_method: 'token' | 'refresh';
  downtime_minutes: number;
}

interface ProjectViewEvent {
  event_type: 'project:view';
  project_id: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  technology?: string[];
}

interface ProjectInteractionEvent {
  event_type: 'project:interaction';
  interaction_type: 'click' | 'save' | 'share';
  element_id: string;
  project_id: string;
}

interface ErrorOccurredEvent {
  event_type: 'error:occurred';
  severity: 'warning' | 'error' | 'critical';
  error_code: string;
  error_message: string;
  stack_trace?: string;
}

// Union of all possible event types
export type AnalyticsEvent = BaseEventProperties & (
  | AuthSignupEvent
  | AuthLoginEvent
  | AuthSessionRecoveredEvent
  | ProjectViewEvent
  | ProjectInteractionEvent
  | ErrorOccurredEvent
);

// Type helper to extract event-specific properties
type EventProperties<T extends AnalyticsEvent['event_type']> = Omit<
  Extract<AnalyticsEvent, { event_type: T }>, 
  keyof BaseEventProperties | 'event_type'
>;

// Strongly-typed event builder
// Update the createEventBuilder function
export const createEventBuilder = <T extends AnalyticsEvent['event_type']>(type: T) => {
  return (
    properties: EventProperties<T>,
    baseProperties: BaseEventProperties
  ): AnalyticsEvent => {
    const event = {
      ...baseProperties,
      event_type: type,
      timestamp: Date.now(),
      ...properties
    };

    // Type guard to verify the event matches the union
    function isAnalyticsEvent(event: any): event is AnalyticsEvent {
      // Basic validation - expand as needed
      return !!event.event_type && !!event.session_id;
    }

    if (!isAnalyticsEvent(event)) {
      throw new Error('Constructed event does not match AnalyticsEvent type');
    }

    return event;
  };
};

// Pre-built event creators
export const AnalyticsEvents = {
  auth: {
    signup: createEventBuilder('auth:signup'),
    login: createEventBuilder('auth:login'),
    sessionRecovered: createEventBuilder('auth:session_recovered'),
  },
  project: {
    view: createEventBuilder('project:view'),
    interaction: createEventBuilder('project:interaction'),
  },
  error: {
    occurred: createEventBuilder('error:occurred'),
  },
};