import { Meta, Story } from '@storybook/vue'
import RandomComponent from './RandomComponent.vue'

export default {
  title: '/atoms/RandomComponent',
  // decorators: [withDesign],
  argTypes: {
    message: {
      name: 'message',
      description: 'Message to display.',
      defaultValue: 'test',
      control: 'text',
    },
    color: {
      name: 'color',
      description: 'Should be `light` or `dark`.',
      defaultValue: 'light',
      control: { type: 'select', options: ['dark', 'light'] },
    },
  },
  component: RandomComponent,
} as Meta

const Template: Story = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RandomComponent },
  template: '<RandomComponent v-bind="$props" />',
})

export const Test = Template.bind({})
Test.args = {
  color: 'light',
  message: 'test',
}
