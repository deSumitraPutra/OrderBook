export const MOBILE_WIDTH: number = 800; // px

export const ORDERBOOK_LEVELS: number = 25; // rows count

export const ProductIds = {
  XBTUSD: 'PI_XBTUSD',
  ETHUSD: 'PI_ETHUSD'
};

export const GroupingOptions: any = {
  PI_XBTUSD: [0.5, 1, 2.5],
  PI_ETHUSD: [0.05, 0.1, 0.25]
};

export const ProductsMap: any = {
  'PI_XBTUSD': 'PI_ETHUSD',
  'PI_ETHUSD': 'PI_XBTUSD',
};

export const DepthVisualizerColors = {
  BIDS: '#113534',
  ASKS: '#3d1e28'
};

export enum OrderType {
  BIDS,
  ASKS
};
