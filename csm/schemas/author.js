export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'bio',
            type: 'richText'
        },
        {
            name: 'image',
            type: 'figure'
        }
    ]

}