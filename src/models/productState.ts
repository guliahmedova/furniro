export interface ProductState {
    entities: []
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    filteredProducts: [],
    searchQuery: ''
};