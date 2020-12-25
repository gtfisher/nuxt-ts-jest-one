import page from '@/pages/page.vue'
import { mount, createLocalVue } from '@vue/test-utils'
import { useAccessor } from 'typed-vuex'


import * as store from '~/store'
import * as stName from '~/store/name'


const localVue = createLocalVue();

// const accessor = useAccessor({
//   ...store,
//   modules: {
//     stName: {
//       ...stName,
//       namespaced: true,
//     },
//   },
// })




const getMocks = (email: Array<any>) => {
  return {
    $accessor: {
      email: {
        email,
        setEmail(_email: any) {
          email = _email;
        },
      },
    },
  };
};





const factory = (options: object) => {
  return mount(page, {
    localVue,
    ...options,
  });
};



describe('Page', () => {
  it('is a Vue component', () => {

    console.log("getMocks:", getMocks([]));

    const wrapper = factory({
      mocks: { ...getMocks([])}
    })
    // console.log("wrapper:", wrapper);
    // console.log("wrapper.vm:", wrapper.vm);
    // const wrapper = mount(page , {
    //   stubs: ["Logo"],
    // })
    expect(wrapper.vm).toBeTruthy()
  });
  it('will set an email address', async () => {
    const wrapper = factory({
      mocks: { ...getMocks([])}
    })
    console.log("###### before:", wrapper.html());
    const btn = await wrapper.find(".email__button");
    console.log("###### btn:", btn);

    await wrapper.find(".email__button").trigger("click");
    // await wrapper.vm.$nextTick();
    // console.log("###### text:", wrapper.text());
    // console.log("###### html after:", wrapper.html());

    // const wrapper = mount(page , {
    //   stubs: ["Logo"],
    // })
    expect(wrapper.vm).toBeTruthy()
  })
})
