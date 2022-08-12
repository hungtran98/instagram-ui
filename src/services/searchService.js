import * as httpRequest from '~/utils/httpRequest'



export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.getUser('users/search', {
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
