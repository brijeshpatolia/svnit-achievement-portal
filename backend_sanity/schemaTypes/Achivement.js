export default{
    name:'achievement',
    title:'Achievement',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'postedby',
            title:'PostedBy',
            type:'string'
        },
        {
            name:'userid',
            title:'UserId',
            type:'string'
        },
        {
            name:'body',
            title:'RecognizingBodyName',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'date',
            title:'Date(dd-mm-yyyy)',
            type:'string'
        },
        {
            name:'accredation',
            title:'Accredation',
            type:'file'
        },
        {
          name: 'like',
          title: 'Like',
          type:'array',
         of:[{ type:'string'}]
        },
        {
          name: 'tags',
          title: 'Tags',
          type:'string'
        },
        {
            name:'imageurl',
            title:'RelatedImages',
            type:'image',
            options:{
                hotspot:true
            }
        },
    ]
}