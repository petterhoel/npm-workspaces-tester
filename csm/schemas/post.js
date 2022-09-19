export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'author',
            type: 'reference',
            to: [
                {
                    type: 'author'
                }
            ]
,       },
        {
            name: 'body',
            type: 'richText'
        }
    ]
}