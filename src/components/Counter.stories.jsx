import { Counter } from './Counter';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Counter/Page',
  component: Counter,
  tags: ['autodocs'],
};

export const Default = () => <Counter />;

export const IncrementByTwo = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Increment' });
    await userEvent.click(button, { delay: 250 });
    await userEvent.click(button, { delay: 250 });
  },
};
