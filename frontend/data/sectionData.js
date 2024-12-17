const sectionData = () => {
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/blogs');
                setBlogs(response.data);
            }
            catch (error) {
                console.error("error in fetching blogs", error);
            }
        }
        fetchBlogs();
    }, [])
}

const data = [
    {
        title: 'Read blogs for latest insights.',
        items: [
            {
                image: require('../assets/images/image_2.png'),
                title: 'How much protein..',
                subtitle: 'Muscle building',
                navigateTo: 'BlogScreen',
            },
            {
                image: require('../assets/images/image_3.png'),
                title: 'Are carb-rich foods..',
                subtitle: 'Vitamins guide',
                navigateTo: 'BlogScreen',
            },
        ],
    },
    {
        title: 'Quizzes & puzzles - earn rewards!',
        items: [
            {
                image: require('../assets/images/image_4.png'),
                title: 'Know these nuts',
                subtitle: 'Quiz time',
                navigateTo: 'QuizScreen',
            },
            {
                image: require('../assets/images/image_3.png'),
                title: 'Grains & nutrition',
                subtitle: 'Solve this puzzle',
                navigateTo: 'PuzzleScreen',
            },
        ],
    },
    {
        title: 'Plan your own nutritious diet!',
        items: [
            {
                image: require('../assets/images/image_2.png'),
                title: 'Quinoa salad',
                subtitle: '20 mins',
                navigateTo: 'DietScreen',
            },
            {
                image: require('../assets/images/image_2.png'),
                title: 'Veggie burger',
                subtitle: '15 mins',
                navigateTo: 'DietScreen',
            },
        ],
    },
];

export default sectionData;
