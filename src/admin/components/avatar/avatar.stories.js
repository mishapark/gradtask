import avatar from "./avatar.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "avatar",
  components: { avatar },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { avatar },
  props: {
    size: {
      default: text("size", "3.1")
    }
  },
  template: `
    <avatar
      title="Михаил Пак" 
      :size="size"
      alt="user picture"
    />
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}
