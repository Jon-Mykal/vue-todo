// Import component to be tested
import AppHeader from '@/components/AppHeader.vue';
import { mount } from '@vue/test-utils' // Allows component to be mounted

// This 'describe' function sets up a test suite
describe('AppHeader', () => {
    // Jest test function.
    test('If user is not logged in, do not show logout button', () => {
        const wrapper = mount(AppHeader);
        let actual = wrapper.find('button').isVisible();
        let expected = false;
        expect(actual).toBe(expected);
    })

    test('If user is logged in, show logout button', async () => {
        const wrapper = mount(AppHeader);
        //wrapper.setData({ loggedIn.})
        await wrapper.setData({ loggedIn: true });
       // await wrapper.vm.$nextTick();
        let actual = wrapper.find('button').isVisible();
        let expected = true;
        expect(actual).toBe(expected);
    })
})