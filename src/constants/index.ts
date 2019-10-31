import pro from '../ipad-pro.jpg'
import samsung from '../samsung.jpg'
import surface from '../surface.jpg'

const IPAD_PRO_NAME: string = "Apple iPad Pro 11";
const IPAD_PRO_DESC: string =
    "Dimensions: 247.6 x 178.5 x 5.9 mm | OS: iOS 12 | Screen size: 11-inch | CPU: A12X Bionic | Storage: 64GB/256GB/512GB/1TB | Battery: 7,812mAh";

const SAMSUNG_TAB_NAME: string = "Samsung Galaxy Tab S6";
const SAMSUNG_TAB_DESC: string =
    "Dimensions: 244.5 x 159.5 x 5.7 mm | OS: Android 9 | Screen size: 10.5-inch | CPU: Snapdragon 855 | Storage: 128GB/256GB | Battery: 7,040mAh";

const MICROSOFT_PRO_NAME: string = "Microsoft Surface Pro";
const MICROSOFT_PRO_DESC: string =
    "Dimensions: 292 x 201 x 8.5mm | OS: Windows 10 Pro | Screen size: 12.3-inch | CPU: Intel Core m3, i5 or i7 | Storage: 128GB/256GB/512GB/1TB | Battery: up to 13.5 hours video playback";

export const PRODUCTS: string[][] = [
    [IPAD_PRO_NAME, IPAD_PRO_DESC, pro],
    [SAMSUNG_TAB_NAME, SAMSUNG_TAB_DESC, samsung],
    [MICROSOFT_PRO_NAME, MICROSOFT_PRO_DESC, surface]
];

