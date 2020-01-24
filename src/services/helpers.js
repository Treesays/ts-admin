const categoryMapping = {
    GeekCode: "5deb349dfbf47f006742a3ee",
    GeekToBuy: "5deb3b65fc36ed0068604fbb",
    GeekTalk: "5deb3b3bfbf47f006742f037",
    GeekLove: "5deb3566fbf47f006742ad28"
};

const fetchFromLeanCloud = (
    dispatch = null,
    table,
    pageNum = 0,
    pageSize = 7
) => {
    const skipHowManyPage = pageNum * pageSize;
    const _table = table === "Users" ? "_User" : table;
    const query = new AV.Query(_table);
    if (dispatch) {
        return query
            .find(
                query
                    .descending("createdAt")
                    .limit(pageSize)
                    .skip(skipHowManyPage)
            )
            .then(data => {
                dispatch({
                    type: `FETCH_${table.toUpperCase()}`,
                    payload: data
                });
            });
    } else {
        return query.find(
            query
                .descending("createdAt")
                .limit(pageSize)
                .skip(skipHowManyPage)
        );
    }
};

export default fetchFromLeanCloud;
