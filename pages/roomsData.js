const roomsData = [
    {
      nextRoom: '/Room2',
      question: "You found out the TF Hailey was the one who hacked your laptops you didnt even know she could do that! Neither did she until she tried! But she doesnt have a degree or any kind of certificate, so its not like she could get a job as a professional hacker! What is the term that puts emphasis on certificates or degrees to show that a person has a certain skill, has attained a certain level of education, or has met certain job qualifications?",
      answers: ['Credentialism', 'Credibility', 'Authentication', 'Conceivable skills'],
      correctAnswer: 'Authentication'
    },
    {
      nextRoom: '/Room3',
      question: `Anyone can access social media now! There\'s TikTok, SnapChat, Instagram, Twitter/X, and so many more.
      One of the many uses of social media is the sharing of information with each other!
      It might be recipes or how to beat levels in video games.
      Sometimes, videos or pictures can be shared regarding social issues.
      No matter where the media is shared, its viewers become enticed by it.
      This can elicit its viewers to find news articles or look towards more 
      credible sources for information about what\'s going on.
      Which stage of Blumer and Tilly\'s social movement outline represents this?`,
      answers: ['Technological response stage', 'Media response stage', 'Coalescence stage', 'Preliminary stage'],
      correctAnswer: 'Preliminary stage'
    },
    {
        nextRoom: '/Room4',
        question: `Conflict theorists claim that due to capitalism\'s pursuit of profit,
        things that would not typically cost money would become items to be bought and sold.
        Think about tourist buses \“observing\” Amish culture. 
        What term best fits this idea?`,
        answers: ['Overcharging', 'Commodification', 'Increasing Profit Margins', 'Capitalism'],
        correctAnswer: 'Commodification'
    },
    {
        nextRoom: '/Room5',
        question: `All this sociology is making me hungry!
        I got so hungry from all the recipes the scholars shared\-
        let\’s see there was pepian, samosa, fried plantains, knafeh,
        mofongo… Where was I? Oh yeah, sociology!
        Which of the images best represents an amalgamation?`,
        answers: [
            { name: 'Overcharging', imageSrc: '/MeltingPot.webp' },
            { name: 'Commodification', imageSrc: '/Cookie.webp' },
            { name: 'Increasing Profit Margins', imageSrc: '/Salad.webp' },
            { name: 'Capitalism', imageSrc: '/Stew.webp' }
        ],
        correctAnswer: 'Commodification'
    },
    {
        nextRoom: '/Room6',
        question: `Let\’s think about the past! 
        Flashback to the 1960s\; pretend you\’re in the movie Grease or West Side Story. 
        At this period in time, it was expected that everyone be doing gender. 
        A term we\’ve gone over is heteronormativity, 
        but it means the promotion of heterosexuallity as the \“normal\” sexual orientation. 
        This meant that certain ideas around gender and sexuality were expected to be upheld by everyone. 
        Even today there can be a sense of heteronormativity. 
        Only within the last decade did TV and movies really start to feature openly LGBTQ characters 
        in leading roles regularly. Before that, the romantic interests would only be a heterosexual 
        couple featuring a man and women, doing their respective genders assigned at birth. 
        Although other sexualities exist, heteronormativity often overlooks or disregards them. 
        Gender roles and gender socialization are one of the constructs of heteronormativity.
        What might be a result of heteronormativity?`,
        answers: ['Homophobia', 'Misogyny', 'Sexism', 'CTransgenderphobia'],
        correctAnswer: 'Homophobia'
    },
    {
        nextRoom: '/Room7',
        question: `You weren\’t supposed to press the button until I said to!!!  
        As your TF, you are supposed to follow what we tell you or it\'s disrespectful.
        For that, here\’s a question: 
        What did you do?`,
        answers: ['Disrespected your TF by breaking the law', 'Something taboo', 'Broke a more', 'Went against the norm'],
        correctAnswer: 'Went against the norm'
    },
    {
        nextRoom: '/Room8',
        question: `Speaking of not doing what you are supposed to do, have you ever heard of climate change? 
        It\’s been impacting the world for a while now. 
        Various pollutants from human activity change delicate ecosystems globally. 
        Thos effects impact humans too! Neighborhoods of people can be more prone to illnesses as a 
        result of that pollution; it happens so often we call them cancer clusters. 
        Us sociologists study society, but a big backbone to that is the study of populations so we 
        can talk about what we see in conjunction with health information and migration/immigration trends.  
        What should we call the study of populations?`,
        answers: ['Anthropology', 'Population science', 'Political science', 'Demography'],
        correctAnswer: 'Demography'
    },
    {
        nextRoom: '/Room9',
        question: `A lot of times parents are worried about their kids making “bad” friends. 
        They might tell you who to hang out with or not to hang out with. 
        Maybe they\’ll judge you or tell you not to see them anymore. 
        These feelings might not be limited to friends; 
        maybe specific family members they view as \“bad\” influences. 
        The idea of calling someone a \“bad\” influence stems from the idea that 
        they are behaving outside of societal norms. They might dress, talk, 
        or do things that would cause people to believe they are deviant and 
        may influence those around them to be deviant as well. 
        Which theory best explains why that might be?`,
        answers: ['Differential association theory', 'Parental socialization theory', 'Labeling theory', 'Control theory'],
        correctAnswer: 'Differential association theory'
    },
    {
        nextRoom: '/Room10',
        question: `Systemic racism has implications in all social institutions- 
        workplaces, schools, families, healthcare, justice, banking. 
        As a society and a general American culture we have made strides to 
        correct the thoughts and attitudes that negatively impact all people of color 
        (those who do not identify racially as white). 
        One of the harsh realities is the impact of racism on the mental health of people of color. 
        Oftentimes they are tasked with correcting the incorrect and inaccurate opinions by 
        having conversations with the people who have them. Instead of delegating this task 
        only to people of color, educating people of any race about the injustices and 
        empowering them to speak out when hearing or witnessing acts of racism helps spread 
        a message of inclusion and equity.
        What\’s the term for oversimplified ideas about groups of people?`,
        answers: ['Prejudice', 'Culture of Prejudice', 'Stereotypes', 'Discrimination'],
        correctAnswer: 'Stereotypes'
    },
    {
        nextRoom: '/Room11',
        question: `Wow! You\’ve almost unhacked your laptop with your sociology skills! 
        Your family will be so proud if you can get through this. 
        Speaking of family, in the study of kinship systems, societies exhibit diverse descent patterns. 
        Tracing lineage through either the father\'s or mother\'s line is often not a choice 
        families explicitly make as they are often influenced by social or economic considerations. 
        In Western cultures we mainly see that descent being traced through the father\’s line with 
        female ancestors who adopted their husband\’s last names making it easier to trace large family trees.
        Which descent system allows for tracing lineage through either the father\'s or mother\'s line, 
        based on factors like social status or property ownership?`,
        answers: ['Patrilineal descent', 'Matrilineal descent', 'Double descent', 'Ambilineal descent '],
        correctAnswer: 'Ambilineal descent '
    },
    {
        nextRoom: '/Room12',
        question: `Congratulations! You\’ve proven you know SOC 101 and are ready to take the final!

        Beyond the final, we hope that what you have learned in this course has widened your view of society. 
        No matter the field you chose to enter, understanding social life, social change, causes of human behavior, 
        and consequences of human action can impact whatever coworkers, clients or patients you are interacting with.

        How can you apply what you\’ve learned about sociology in your relationships, education, work, or beyond to make the world a better place?`,
        answers: ['Patrilineal descent', 'Matrilineal descent', 'Double descent', 'Ambilineal descent '],
        correctAnswer: 'Ambilineal descent '
    }



  ];

  export { roomsData };
  