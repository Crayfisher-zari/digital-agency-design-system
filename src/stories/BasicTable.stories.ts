import type { Meta, StoryObj } from "@storybook/vue3";
import BasicTable from "../components/BasicTable.vue";

const meta = {
  title: "BasicTable",
  component: BasicTable,
  tags: ["autodocs"],
} satisfies Meta<typeof BasicTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => ({
    components: { BasicTable },
    template: `<BasicTable>
    <table class="customTable">
            <thead>
              <th>Table Hader</th>
              <th>Table Hader</th>
              <th>Table Hader</th>
              <th>Table Hader</th>
              <th>Table Hader</th>
            </thead>
            <tbody>
              <tr>
                <th>Table Hader</th>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
              </tr>
              <tr>
                <th>Table Hader</th>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
              </tr>
              <tr>
                <th>Table Hader</th>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
              </tr>
              <tr>
                <th>Table Hader</th>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
              </tr>
              <tr>
                <th>Table Hader</th>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
              </tr>
            </tbody>
          </table>
    </BasicTable>`,
  }),
};
