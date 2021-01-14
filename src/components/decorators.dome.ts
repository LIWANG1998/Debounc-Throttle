import { debounce, throttle } from "lodash";
/**
 * 函数防抖的装饰器
 * @param wait 延迟时间
 * @param options [options=] (Object): 选项对象。
 * [options.leading=false] (boolean): 指定在延迟开始前调用
 * [options.maxWait] (number): 设置 func 允许被延迟的最大值
 * [options.trailing=true] (boolean): 指定在延迟结束后调用
 */
export function Debounce(wait = 100, options = { leading: false, trailing: true }) {
    return (target: any, property: string, descriptor: PropertyDescriptor) => {
        let oldFun = descriptor.value;
        descriptor.value = debounce(oldFun, wait, options);
    }
}

/**
 * 函数节流的装饰器
 * @param wait 延迟时间
 * @param options [options=] (Object): 选项对象。
 * [options.leading=false] (boolean): 指定在延迟开始前调用
 * [options.trailing=true] (boolean): 指定在延迟结束后调用
 */
export function Throttle(wait = 100, options = { leading: false, trailing: true }) {
    return (target: any, property: string, descriptor: PropertyDescriptor) => {
        let oldFun = descriptor.value;
        descriptor.value = throttle(oldFun, wait, options);
    }
}