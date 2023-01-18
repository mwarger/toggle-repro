import styles from './Toggle.module.css';

import { createMachine } from 'xstate';

const toggleMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgKwBdcA3MAYgBUB5AcRYBkBRAbQAYBdRKAAOAe1i4qo-EJAAPRAEYArAA4Si1YoBMAZgBs2-QHZeqgJyqALABoQATyW7tGnct67eyxceXHVAL4BdmhYeISklDT0zGxcfIJIIGISUjJJCggq6po6BkamFtZ2jghaJCbuHl4+flpBIRg4BMQkUbR0nLT4FAAE2gmyKZK40rKZutYkyrrGVspG5sa+uuYliOaKJFbG2ubavLzmluZW2toNIKHNESSEAO69sBToFGC9ip3dfYqDScNpcaIbxWCraHS8KyzQwHYzrLJWczbZz7PbHXj6KwqILBED4UQQOCya7hYhDcQjMYZRAAWn08JpxhIu0Rlh2WPBRyslxJLVI5EwVFo5NSo3SoEyZ3hqiZxl0yixFmUCtU7l0PKapMiguiIsp4vkiG0qhcVgx4NOJrOijWDg2vBIegVmnMyqsqo8GrCfLuYEez1e70UesB1IQ7lBMzmC30SxWttKqu2u32h2OFjOF1xvNuDyeLze-RDYqB4d4LkMEKhxhhvDhdoQByRUL252O5gxWOUOICQA */
  createMachine({
    id: '(machine)',
    initial: 'inactive',
    states: {
      inactive: {
        on: {
          TOGGLE: {
            target: 'active',
          },
        },
      },
      active: {
        on: {
          TOGGLE: {
            target: 'inactive',
          },
          'Event 2': {
            target: 'new state 1',
          },
        },
      },
      'new state 1': {
        on: {
          'Event 1': {
            target: 'new state 2',
          },
        },
      },
      'new state 2': {},
    },
  });

/* eslint-disable-next-line */
export interface ToggleProps {}

export function Toggle(props: ToggleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Toggle!</h1>
    </div>
  );
}

export default Toggle;
