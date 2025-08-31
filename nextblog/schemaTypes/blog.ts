// create a schema
export default {
    name : 'blog',
    type : 'document',
    title : 'Blog',
    fields : [
        {
            name : 'title',
            type : 'string',
            title : 'Title of blog'
        },
        {
            name : 'slug',
            type : 'slug',
            title : 'Slug of your blog',
            options : {
                source : 'title'
            } // import it from title
        },
        {
            name : 'imagetitle',
            type : 'image',
            title : 'Title image of your blog'
        },
        {
            name : 'smalldescription',
            type : 'text',
            title : 'Small description of your blog'
        },
        {
            name : 'content',
            type : 'array',
            title : 'Content of your blog',
            of : [
                {
                    type : 'block'
                }
            ]
        }
    ]
}