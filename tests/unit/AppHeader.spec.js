// Import component to be tested
import AppHeader from '@/components/AppHeader.vue';
import { mount } from '@vue/test-utils' // Allows component to be mounted

// This 'describe' function sets up a test suite
describe('AppHeader', () => {
    // Jest test function.
    test('If user is not logged in, do not show logout button', () => {
        const wrapper = mount(AppHeader);
        let actual = wrapper.find('#btnLog').isVisible();
        let expected = false;
        expect(actual).toBe(expected);
    });

    test('If user is logged in, show logout button', async () => {
        const wrapper = mount(AppHeader);
        //wrapper.setData({ loggedIn.})
        await wrapper.setData({ loggedIn: true });
       // await wrapper.vm.$nextTick();
        let actual = wrapper.find('button').isVisible();
        let expected = true;
        expect(actual).toBe(expected);
    });

    test("By default, randomNumber data value should be 0", () => {
        const wrapper = mount(AppHeader);
        expect(wrapper.html()).toContain('<span>0</span>');
    })

    test("By default, randomNumber data value should be between 1 and 10", async () => {
        const wrapper = mount(AppHeader);
        // Use Async/Await to ensure the DOM updates
        await wrapper.find("#btnGen").trigger('click');
        const randomNumber = parseInt(wrapper.find('span').element.textContent);
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(10);
    })

    test("If button is clicked, randomNumber should be between 200 and 300", async() => {
        const wrapper = mount(AppHeader, {
            propsData: {
                min: 200,
                max: 300
            }
        });
        // Use Async/Await to ensure the DOM updates
        await wrapper.find("#btnGen").trigger('click');
        const randomNumber = parseInt(wrapper.find('span').element.textContent);
        expect(randomNumber).toBeGreaterThanOrEqual(200);
        expect(randomNumber).toBeLessThanOrEqual(300);
    });
})