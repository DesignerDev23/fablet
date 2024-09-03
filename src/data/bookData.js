const booksData = [
    {
        title: 'The Shadow Weaver’s Curse',
        description: 'A young girl cursed with the power to manipulate shadows must navigate a world filled with darkness and deception to break free from her fate.',
        image: require('../../assets/images/book1.jpg'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Mystery',
        content: `
        In the village of Nighthollow, shadows held secrets that most dared not confront. Elena was born with a gift—or perhaps a curse. She could control shadows, but this power came at a terrible price. Whenever she used it, the darkness crept closer to consuming her entirely.

        When a malevolent spirit begins haunting her village, manipulating the fears of those who live there, Elena is forced to confront her abilities. With every step she takes to uncover the truth, she learns that the curse is tied to an ancient pact made long before her birth.

        Guided by a mysterious stranger who knows more about her curse than he reveals, Elena must journey through forgotten forests and cursed ruins to unravel the mystery of her powers. But time is running out, and if she can’t control the shadows, they will consume not just her but everything she holds dear.

        In the end, Elena faces a choice: embrace the darkness within or let it destroy her and the world she’s vowed to protect.
        `
    },
    {
        title: 'The Enchanted Moonstone',
        description: 'A brave young prince must journey to find a magical moonstone that holds the power to save his kingdom from an impending darkness.',
        image: require('../../assets/images/book2.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Adventure',
        content: `
        In the kingdom of Lumeria, a prophesied darkness looms over the land, threatening to engulf everything in its path. Prince Rowan, known for his courage and wisdom, learns of an ancient moonstone with the power to banish the encroaching shadows. The moonstone, however, lies hidden in a treacherous, enchanted forest guarded by mythical creatures.

        Accompanied by a skilled warrior and a mysterious sorceress, Rowan embarks on a perilous quest to retrieve the moonstone. Along the way, he uncovers hidden truths about his lineage and the true nature of the darkness threatening his home. The journey tests his bravery and resolve, and in the end, Rowan must make a sacrifice that will determine the fate of his kingdom.
        `
    },
    {
        title: 'The Celestial Key',
        description: 'An ancient key with the power to unlock celestial realms falls into the hands of a commoner, who must navigate both earthly and divine challenges to prevent cosmic chaos.',
        image: require('../../assets/images/book3.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Mythology',
        content: `
        When a humble blacksmith’s apprentice named Mira stumbles upon a celestial key hidden within her grandfather’s old workshop, she unwittingly becomes the linchpin in an ancient cosmic struggle. The key has the power to open gateways to divine realms, and its sudden reappearance causes turmoil among celestial beings.

        Mira is thrust into a world of gods and goddesses, where she must learn to harness the key’s powers and navigate intricate celestial politics. Alongside a rebellious demi-god and a wise oracle, Mira faces trials that test her intellect and courage. The fate of both the earthly and celestial realms rests in her hands.
        `
    },
    {
        title: 'The Forgotten Realm',
        description: 'A scholar discovers a hidden portal to a forgotten realm and must decode its mysteries to prevent a prophecy from coming true.',
        image: require('../../assets/images/book4.jpeg'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Adventure',
        content: `
        Dr. Elara Thorne, an esteemed scholar of ancient civilizations, uncovers a hidden portal in the ruins of a long-lost city. This portal leads to a forgotten realm where time flows differently, and ancient beings dwell.

        As Elara explores the realm, she discovers a prophecy that speaks of a great calamity if the realm remains undiscovered. With the help of an enigmatic guide and a band of misfit adventurers, Elara must decipher the realm's secrets and prevent the prophecy from becoming reality. The journey forces her to confront her own fears and question her beliefs about history and destiny.
        `
    },
    {
        title: 'The Dragon’s Legacy',
        description: 'A young woman discovers her heritage as the last of an ancient dragon-bloodline and must unite the fractured dragon clans to save the world from destruction.',
        image: require('../../assets/images/book5.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Epic',
        content: `
        In the remote village of Draconia, Lyra believes she is an ordinary woman with no extraordinary talents. However, when a dragon appears and recognizes her as the last heir of a forgotten dragon-bloodline, her life changes forever.

        As Lyra learns to harness her latent dragon powers, she uncovers a fractured world of dragon clans who have been warring for centuries. To restore balance and prevent an impending apocalypse, Lyra must unite the clans and uncover the true legacy of her ancestors. Her journey is fraught with danger, and she must learn to trust herself and her allies to save the world from impending doom.
        `
    },
    {
        title: 'The Shattered Mirror',
        description: 'When a cursed mirror shatters, a young woman must gather its pieces scattered across a magical realm to restore her stolen identity and save her family.',
        image: require('../../assets/images/book6.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Mystery',
        content: `
        In a quaint village, Lila discovers an old mirror that has been passed down through generations. When it suddenly shatters, she realizes that its curse has stolen her identity and left her family in peril. The pieces of the mirror are scattered across a mystical land, each guarded by dangerous creatures and ancient spells.

        Guided by a cryptic map, Lila embarks on a perilous journey to retrieve the shards. Along the way, she encounters allies and enemies, each with their own agendas. As she collects the pieces, Lila uncovers hidden truths about her lineage and the mirror's dark past.

        In the final confrontation, Lila must confront the mirror’s creator, who reveals a shocking twist about her true self. Restoring the mirror could mean losing more than she ever imagined, and Lila must make a choice that will alter her destiny forever.
        `
    },
    {
        title: 'The Mystic Amulet',
        description: 'A young thief discovers a powerful amulet with the ability to alter reality and must evade dark forces seeking to claim it for their own sinister purposes.',
        image: require('../../assets/images/book7.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Adventure',
        content: `
        In the bustling city of Veridian, young thief Kael stumbles upon an ancient amulet that grants its bearer the power to reshape reality. Unbeknownst to him, this amulet is highly sought after by dark forces who wish to use its power for destruction.

        As Kael tries to uncover the amulet's secrets, he is pursued by shadowy figures and must rely on his wits and newfound allies. Alongside a rogue mage and a mysterious guardian, Kael navigates treacherous landscapes and battles sinister foes.

        With the fate of his city hanging in the balance, Kael must decide whether to keep the amulet or destroy it to prevent its power from falling into the wrong hands. The choices he makes will determine the future of Veridian and beyond.
        `
    },
    {
        title: 'The Eternal Flame',
        description: 'A fire mage embarks on a quest to reignite an ancient flame that has the power to save her dying homeland from eternal winter.',
        image: require('../../assets/images/book8.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Epic',
        content: `
        In a land gripped by eternal winter, fire mage Aria is the last hope for her people. Legends speak of an ancient flame that can restore warmth and life to her homeland, but it lies hidden in a perilous, frost-covered domain.

        Joined by a diverse group of companions, Aria ventures through icy caverns and mystical ruins to find the flame. Along the way, she faces tests of bravery and uncovers secrets about her own powers and the source of the eternal winter.

        As Aria reaches the flame’s resting place, she must confront a formidable guardian and make a sacrifice that could either save her homeland or doom it to unending cold. Her journey is one of courage, self-discovery, and determination.
        `
    },
    {
        title: 'The Whispering Woods',
        description: 'A group of adventurers must solve the mystery of a forest where the trees whisper secrets and illusions that lead to dangerous paths and hidden truths.',
        image: require('../../assets/images/book9.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Mystery',
        content: `
        In the heart of the Whispering Woods, the trees hold secrets and illusions that confuse and mislead those who enter. A group of adventurers is drawn to the forest by tales of a hidden artifact with the power to grant wishes.

        As they traverse the forest, the adventurers encounter enigmatic creatures and face challenges that test their trust in one another. The forest's whispers guide and mislead them, revealing hidden truths about their own pasts and desires.

        To find the artifact and escape the forest, they must unravel the mysteries of the woods and confront their deepest fears. The forest holds the key to their wishes, but it also demands a price for granting them.
        `
    },
    {
        title: 'The Elemental Trials',
        description: 'A young warrior must pass a series of trials to harness the powers of the four elements and prevent a cataclysmic event from destroying her world.',
        image: require('../../assets/images/book10.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Adventure',
        content: `
        In a world where the balance of nature is maintained by elemental forces, warrior Kira is chosen to undertake the Elemental Trials. These trials test her ability to control fire, water, earth, and air, and are crucial to preventing a catastrophic event that threatens her world.

        With guidance from elemental spirits and the support of her allies, Kira faces formidable challenges and learns to master each element. Each trial pushes her to her limits and reveals hidden strengths and weaknesses.

        As the final trial approaches, Kira confronts a dark force seeking to exploit the imbalance between the elements. To save her world, she must prove her worth and unite the elemental powers before it's too late.
        `
    },
    {
        title: 'The Alchemist’s Legacy',
        description: 'A young apprentice must decipher her master’s alchemical notes to prevent an impending disaster and uncover the truth behind a long-lost recipe for immortality.',
        image: require('../../assets/images/book11.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Mystery',
        content: `
        After the sudden disappearance of her master, apprentice Alina discovers a series of cryptic alchemical notes. These notes hint at a recipe for immortality and the existence of a powerful elixir that could either save or doom her world.

        Alina embarks on a journey to decode the notes and find the ingredients for the elixir. Along the way, she encounters rival alchemists and shadowy figures who seek to control the recipe for their own ends.

        With time running out and danger at every turn, Alina must solve the mysteries of her master’s legacy and decide whether to use the elixir for good or destroy it to prevent it from falling into the wrong hands.
        `
    },
    {
        title: 'The Time Weaver’s Gambit',
        description: 'A time traveler must outwit a rival who seeks to alter history and prevent a cataclysmic event that could change the course of the future.',
        image: require('../../assets/images/book12.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Science Fiction',
        content: `
        In a world where time travel is possible, seasoned traveler Elan is tasked with preserving the timeline from those who wish to alter it. When a rival time weaver attempts to change key events to cause a future catastrophe, Elan must act swiftly.

        Elan travels through different eras, encountering historical figures and witnessing pivotal moments. As he uncovers the rival’s plan, he must use his knowledge and skills to outmaneuver them and restore the timeline.

        The final showdown takes place in a future where the consequences of the timeline’s disruption are most apparent. Elan must make a crucial decision to protect the future and preserve the delicate balance of history.
        `
    },
    {
        title: 'The Forgotten Prophecy',
        description: 'An ancient prophecy resurfaces, and a group of unlikely heroes must unite to decipher its meaning and stop a looming threat foretold to bring about the end of their world.',
        image: require('../../assets/images/book13.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Adventure',
        content: `
        When an old prophecy is rediscovered, it foretells the end of the world unless a group of heroes can unravel its cryptic message. The prophecy speaks of a great evil rising and a quest that must be undertaken to prevent it.

        The heroes, each with their own skills and backgrounds, come together to decipher the prophecy and embark on a journey to find the artifact that can avert the disaster. Their quest leads them through perilous landscapes and ancient ruins.

        As they piece together the prophecy’s meaning, they confront the dark forces that seek to fulfill it. The heroes must overcome their differences and work together to save their world from impending doom.
        `
    },
    {
        title: 'The Hidden Sanctuary',
        description: 'A young woman discovers a hidden sanctuary with magical properties that may hold the key to curing her ailing brother and uncovering family secrets.',
        image: require('../../assets/images/book14.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Mystery',
        content: `
        While searching for a cure for her ailing brother, Lyra stumbles upon a hidden sanctuary that is said to possess magical healing powers. This sanctuary, however, is protected by powerful enchantments and secrets.

        As Lyra navigates the sanctuary's trials, she discovers hidden truths about her family's past and their connection to the magical realm. She uncovers clues that suggest her family has been guarding the sanctuary for generations.

        To save her brother and reveal the full truth, Lyra must confront the sanctuary’s guardians and make a choice that could alter her family’s legacy forever. Her journey reveals the true nature of the sanctuary and her own place within its history.
        `
    },
    {
        title: 'The Night Stalker’s Oath',
        description: 'An orphaned thief is drawn into a secret society of night stalkers and must uphold their oath to protect the city from supernatural threats.',
        image: require('../../assets/images/book15.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Urban Fantasy',
        content: `
        In a city plagued by supernatural threats, orphaned thief Zara is recruited into a secret society known as the Night Stalkers. This group has vowed to protect the city from creatures and dark forces that lurk in the shadows.

        As Zara learns the ways of the Night Stalkers, she uncovers a conspiracy that threatens the balance between the human and supernatural worlds. Her skills and courage are put to the test as she faces formidable adversaries.

        Zara must uphold the Night Stalkers’ oath and prevent an ancient evil from emerging. Her journey challenges her beliefs and forces her to confront her own past while safeguarding the city she now calls home.
        `
    },
    {
        title: 'The Celestial Scribe',
        description: 'A gifted writer discovers she has the ability to bring her written words to life and must use her gift to prevent a celestial war.',
        image: require('../../assets/images/book16.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Mythology',
        content: `
        When reclusive writer Elowen finds an old quill that grants her the power to bring her written words to life, she is initially thrilled. However, her newfound ability attracts the attention of celestial beings who seek to exploit her gift for their own agendas.

        As Elowen becomes embroiled in a celestial conflict, she must navigate a world of divine politics and ancient rivalries. Her writing influences the outcome of battles and the fate of gods.

        To prevent a celestial war and protect the world she loves, Elowen must master her gift and confront the gods who wish to control her power. Her journey is one of self-discovery and bravery as she writes the future of her world.
        `
    },
    {
        title: 'The Last Enchanter',
        description: 'In a world where magic is dying, a young enchanter discovers he is the last of his kind and must restore magic to save his dying world.',
        image: require('../../assets/images/book17.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Epic',
        content: `
        In a land where magic is fading, young enchanter Kael discovers that he is the last of his kind. The once-thriving magical world is now on the brink of extinction, and Kael holds the key to its salvation.

        Kael sets out on a quest to restore magic, seeking out ancient artifacts and forgotten spells that can revive the enchantments of old. Along the way, he encounters allies who help him understand his role in the magical world.

        As Kael delves deeper into the mysteries of magic, he faces powerful adversaries who seek to control or destroy what remains. His journey is a race against time to restore balance and save his world from total annihilation.
        `
    },
    {
        title: 'The Forbidden Kingdom',
        description: 'A young adventurer stumbles upon a forgotten kingdom hidden from the world and must uncover its secrets to prevent a looming catastrophe.',
        image: require('../../assets/images/book18.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Adventure',
        content: `
        When adventurous explorer Mia discovers a hidden kingdom that has been lost to history, she is intrigued by its ancient wonders and secrets. The kingdom holds knowledge and artifacts that could prevent a looming catastrophe threatening her world.

        As Mia explores the kingdom, she uncovers forgotten prophecies and hidden dangers that challenge her survival skills. She must decipher the kingdom’s mysteries and forge alliances with its enigmatic inhabitants.

        To prevent the impending disaster, Mia must unlock the kingdom's secrets and confront those who seek to use its power for their own ends. Her journey is filled with peril and discovery as she races against time to save her world.
        `
    },
    {
        title: 'The Whispering Crown',
        description: 'A young noble discovers a mystical crown that grants its wearer the ability to hear the thoughts of others and must use this power to avert a royal conspiracy.',
        image: require('../../assets/images/book19.jpg'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Mystery',
        content: `
        When young noble Adrian inherits a mystical crown, he soon learns that it grants him the power to hear the thoughts of those around him. This new ability reveals a tangled web of deceit and conspiracy within the royal court.

        As Adrian navigates the treacherous world of politics and power, he uncovers a plot to overthrow the monarchy. His newfound power provides both an advantage and a burden as he struggles to discern truth from deception.

        To protect the kingdom and preserve the crown’s legitimacy, Adrian must use his gift wisely and expose the conspiracy. His journey challenges his loyalty and forces him to confront hidden truths about those closest to him.
        `
    },
    {
        title: 'The Starborn Legacy',
        description: 'A young woman discovers she is the last of an ancient lineage destined to protect a powerful celestial artifact and must battle dark forces seeking to claim it.',
        image: require('../../assets/images/book20.jpg'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Epic',
        content: `
        In a world where celestial artifacts are revered and protected, young Seraphina learns that she is the last descendant of an ancient lineage tasked with guarding one such artifact. This celestial artifact holds immense power and is sought after by dark forces intent on wielding its power for evil.

        Seraphina must embrace her heritage and learn to wield the artifact's power to defend it from those who wish to seize it. Her quest leads her across lands filled with magic and danger, as she gathers allies and uncovers the truth about her ancestry.

        Facing formidable adversaries and personal challenges, Seraphina's journey is one of self-discovery and valor. She must protect the artifact and fulfill her destiny to ensure the balance of power remains intact.
        `
    },
    {
        title: 'The Veiled City',
        description: 'A detective with the ability to see through illusions must solve a series of mysterious disappearances in a city where nothing is as it seems.',
        image: require('../../assets/images/book21.png'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Thriller',
        content: `
        In the enigmatic city of Veilgate, where illusions mask the truth, detective Rowan possesses a rare ability to see through these deceptions. When a series of disappearances threatens the city's stability, Rowan is called upon to unravel the mystery.

        As Rowan investigates, he encounters layers of deception and faces challenges that test his perception and skills. The case leads him through hidden corners of the city and into the heart of a conspiracy that aims to control the illusions for nefarious purposes.

        To solve the case and reveal the truth, Rowan must confront his own fears and rely on his unique gift. The stakes are high as the city’s future hangs in the balance and the line between reality and illusion blurs.
        `
    },
    {
        title: 'The Oracle’s Betrayal',
        description: 'A young oracle must navigate a web of political intrigue and personal betrayal to uncover a plot that threatens the stability of her realm.',
        image: require('../../assets/images/book22.jpg'), // Placeholder path, will update after generating the cover image
        category: 'Fantasy, Political Thriller',
        content: `
        Gifted with the ability to foresee events, young oracle Lina is thrust into a world of political machinations and intrigue. When she foresees a plot that threatens the stability of her realm, she must navigate a dangerous landscape of betrayal and deception.

        Lina’s journey takes her into the inner circles of power, where she uncovers alliances and rivalries that challenge her understanding of truth and loyalty. With her visions becoming increasingly unclear, Lina must decipher who can be trusted and how to thwart the looming threat.

        As the plot unfolds, Lina faces difficult choices and personal betrayals. To protect her realm and ensure its future, she must use her prophetic abilities wisely and confront those who seek to undermine it from within.
        `
    }
];

export default booksData;
