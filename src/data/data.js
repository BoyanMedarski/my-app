const articles = [
    {
        id: "1",
        title: { english: "title 1", german: "title german1", bulgarian: "title bulgarian1" },
        content: { english: " some content english 1 some content english 1 some content english 1 some content english 1 some content english 1 some content english 1 some content english 1 some content english 1 some content english 1 some content english 1 some content english 1 some content english 1 some content english 1 some content english 1 some content english 1", german: "some content german1", bulgarian: "some content bulgarian bulgarian1" },
        date: "2015-09-11",
        isActive: true,
        isDeleted: false,
        slug: 'article-1',
    },
    {
        id: "2",
        title: { english: "title 2", german: "title german 2", bulgarian: "title bulgarian 2" },
        content: { english: "some content english 2 <div>asd</div>", german: "some content german 2", bulgarian: "some content bulgarian bulgarian 2" },
        date: "2015-09-19",
        isActive: true,
        isDeleted: false,
        slug: 'article-2',
    }, {
        id: "3",
        title: { english: "title 3", german: "title german 3 ", bulgarian: "title bulgarian 3" },
        content: { english: "some content english 3", german: "some content german 3", bulgarian: "some content bulgarian bulgarian3 " },
        date: "2015-09-01",
        isActive: true,
        isDeleted: false,
        slug: 'article-3',
    }, {
        id: "4",
        title: { english: "title 4", german: "title german 4", bulgarian: "title bulgarian 4" },
        content: { english: "some content english 4", german: "some content german 4 ", bulgarian: "some content bulgarian bulgarian 4" },
        date: "2015-09-15",
        isActive: true,
        isDeleted: false,
        slug: 'article-4',
    }, {
        id: "5",
        title: { english: "title 5", german: "title german 5", bulgarian: "title bulgarian 5" },
        content: { english: "some content english 5", german: "some content german 5", bulgarian: "some content bulgarian bulgarian 5" },
        date: "2015-09-13",
        isActive: false,
        isDeleted: false,
        slug: 'article-5',
    }, {
        id: "6",
        title: { english: "title 6", german: "title german 6", bulgarian: "title bulgarian 6" },
        content: { english: "some content english 6", german: "some content german 6", bulgarian: "some content bulgarian bulgarian 6" },
        date: "2015-09-11",
        isActive: true,
        isDeleted: true,
        slug: 'article-6',
    },
];

export default articles;
