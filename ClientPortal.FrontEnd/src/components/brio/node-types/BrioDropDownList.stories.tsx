import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BrioForm } from '../form/BrioForm'
import { BrioFormContextProvider } from '../form/BrioFormContextProvider'
import { BrioDropDownList } from './BrioDropDownList'

export default {
  title: 'Brio Node Types/BrioDropDownList',
  component: BrioDropDownList,
  decorators: [
    Story => (
      <BrioFormContextProvider>
        <BrioForm>
          <Story />
        </BrioForm>
      </BrioFormContextProvider>
    ),
  ],
  argTypes: {},
  args: {
    id: 'id',
    text: 'This is a label',
    options: [
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' },
    ],
  },
} as ComponentMeta<typeof BrioDropDownList>

const Template: ComponentStory<typeof BrioDropDownList> = args => <BrioDropDownList {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithValue = Template.bind({})
WithValue.args = {
  value: 'two',
}

export const WithReadOnly = Template.bind({})
WithReadOnly.args = {
  value: 'three',
  readOnly: true,
}

export const WithAutocomplete = Template.bind({})
WithAutocomplete.args = {
  options: [
    { id: 'one', text: 'One' },
    { id: 'two', text: 'Two' },
    { id: 'three', text: 'Three' },
    { id: 'four', text: 'Four' },
    { id: 'five', text: 'Five' },
    { id: 'six', text: 'Six' },
    { id: 'seven', text: 'Seven' },
    { id: 'eight', text: 'Eight' },
    { id: 'nine', text: 'Nine' },
    { id: 'ten', text: 'Ten' },
    { id: 'eleven', text: 'Eleven' },
    { id: 'twelve', text: 'Twelve' },
  ],
}
