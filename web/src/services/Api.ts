export interface StrapiResponse<T = any> {
    data: {
        id: number,
        attributes: T,
        meta: {}
      },
      meta: {}
}

