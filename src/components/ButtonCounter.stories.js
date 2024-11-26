import { ButtonCounter } from './ButtonCounter';

export default {
  title: 'Counter/ButtonCounter',
  component: ButtonCounter,
  tags: ['autodocs'],
  argTypes: {
    buttonStyleVersion: {
      control: 'select',
      options: ['counter-button1', 'counter-button2', 'counter-button3'],
      description:
        'Choose any of the three options of different styled buttons',
    },
    backgroundColor: {
      control: 'color',
      description:
        'Please change the background color within the blue spectrum',
      table: {
        defaultValue: { summary: '#c4fff3' },
      },
    },
    label: {
      control: 'text',
      description: 'Other options include: "Enter", "Submit", "Search"',
      table: {
        defaultValue: { summary: 'Click me' },
      },
    },
    size: {
      control: 'select',
      description:
        'You can only type in either "small" or "large" for changing size',
      table: {
        defaultValue: { summary: 'large' },
      },
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Click me',
    backgroundColor: '#c4fff3',
  },
  argTypes: {
    buttonStyleVersion: {
      control: {
        control: 'select',
        options: ['counter-button1', 'counter-button2', 'counter-button3'],
        description:
          'Choose any of the three options of different styled buttons',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'This is a large button view',
      },
    },
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Enter',
    backgroundColor: '#c4fff3',
  },
  argTypes: {
    buttonStyleVersion: {
      control: {
        control: 'select',
        options: ['counter-button1', 'counter-button2', 'counter-button3'],
        description:
          'Choose any of the three options of different styled buttons',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'This is a small button view',
      },
    },
  },
};
