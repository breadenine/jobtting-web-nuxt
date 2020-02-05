<template>
  <div>
    <a-form id="components-form-demo-validate-other" :form="form" v-bind="formItemLayout" @submit="handleSubmit">
      <a-form-item label="Plain Text">
        <span class="ant-form-text">
          텍스트
        </span>
      </a-form-item>
      <a-form-item label="Select" has-feedback>
        <a-select
          v-decorator="['select', { rules: [{ required: true, message: 'Please select your country!' }] }]"
          placeholder="Please select a country"
        >
          <a-select-option value="korea">
            Korea
          </a-select-option>
          <a-select-option value="usa">
            U.S.A
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="Select[multiple]">
        <a-select
          v-decorator="[
            'select-multiple',
            {
              rules: [{ required: true, message: 'Please select your favourite colors!', type: 'array' }]
            }
          ]"
          mode="multiple"
          placeholder="Please select favourite colors"
        >
          <a-select-option value="red">
            Red
          </a-select-option>
          <a-select-option value="green">
            Green
          </a-select-option>
          <a-select-option value="blue">
            Blue
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="InputNumber">
        <a-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
        <span class="ant-form-text">
          machines
        </span>
      </a-form-item>

      <a-form-item label="Switch">
        <a-switch v-decorator="['switch', { valuePropName: 'checked' }]" />
      </a-form-item>

      <a-form-item label="Slider">
        <a-slider v-decorator="['slider']" :marks="{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }" />
      </a-form-item>

      <a-form-item label="Radio.Group">
        <a-radio-group v-decorator="['radio-group']">
          <a-radio value="a">
            item 1
          </a-radio>
          <a-radio value="b">
            item 2
          </a-radio>
          <a-radio value="c">
            item 3
          </a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="DatePicker"><a-date-picker @change="onChange" /> </a-form-item>

      <a-form-item label="Radio.Button">
        <a-radio-group default-value="a" button-style="solid">
          <a-radio-button value="a">Hangzhou</a-radio-button>
          <a-radio-button value="b">Shanghai</a-radio-button>
          <a-radio-button value="c">Beijing</a-radio-button>
          <a-radio-button value="d">Chengdu</a-radio-button>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="Checkbox.Group">
        <a-checkbox-group v-decorator="['checkbox-group', { initialValue: ['A', 'B'] }]" style="width: 100%;">
          <a-row>
            <a-col :span="8">
              <a-checkbox value="A">
                A
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox disabled value="B">
                B
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="C">
                C
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="D">
                D
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="E">
                E
              </a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </a-form-item>

      <a-form-item label="Rate">
        <a-rate v-decorator="['rate', { initialValue: 3 }]" :tooltips="desc" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
export default {
  name: 'JobAdd',
  data() {
    return {
      desc: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      }
    }
  },
  fetch({ store }) {
    store.commit('jobs/SET_SAMPLE', '가나다라')
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    onChange(date, dateString) {
      console.log(date, dateString)
    }
  }
}
</script>

<style lang="scss" scoped></style>
