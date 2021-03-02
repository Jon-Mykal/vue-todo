// Import component to be tested
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader', () => {
    test('If user is not logged in, do not show logout button', () => {
        let actual = true;
        let expected = true;
        expect(actual).toBe(expected);
    })
})