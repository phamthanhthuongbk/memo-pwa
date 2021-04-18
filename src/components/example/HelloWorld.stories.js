import HelloWorld from './HelloWorld.vue';

export default {
  title: 'Example/HelloWorld',
  component: HelloWorld,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HelloWorld },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<HelloWorld v-bind="args" />',
});

export const Helloword = Template.bind({});
Helloword.args = {
  msg: 'Hello Word',
};
