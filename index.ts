// 定義訂單狀態
export enum OrderStatus {
  PENDING = "PENDING", // 待處理
  PREPARING = "PREPARING", // 製作中
  READY = "READY", // 待取餐/待送餐
  COMPLETED = "COMPLETED", // 已完成
  CANCELED = "CANCELED", // 已取消
}

// 定義飲料介面
export interface Drink {
  id: string;
  name: string;
  price: number;
}

export default {};
