import * as rq from '~/utils/request'



export const search = async (q, type = 'less') => {
    try {
        const res = await rq.getUser('users/search', {
            params: {
                q: q,
                type: type
            }
        })

        return res.data
        // setSearchResult(res.data)
        // setLoading(false)
    } catch (error) {
        // setLoading(false)
        console.log(error)
    }
    
}
