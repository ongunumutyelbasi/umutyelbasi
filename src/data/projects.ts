export const getSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

export const projects = [
	{
		title: "Manchester Jazz Festival 2025",
		desc: "I served as a live sound engineer at the 30th edition of the Manchester Jazz Festival, mixing performances for the Jascha Bingham Trio and New Ways of Moving in the Counterworlds on the HOME Stage.",
		longDesc: `
            <p>I recently had the pleasure of working as a sound engineer at the Manchester Jazz Festival last weekend, supporting live performances on the HOME Stage at Manchester First Street.</p>
            
            <p>I teamed up with Adam Speakman, who led sound engineering for the HOME Stage, and he very kindly allowed me to get behind the sound desk. We rotated mixing duties across the weekend — I mixed for two incredible acts: the Jascha Bingham Trio and New Ways of Moving in the Counterworlds.</p>
            
            <p>This was my first time in a while working on a major production, and it reminded me how much I’ve missed being behind the desk for live shows. Grateful for the chance to be part of it, and I'll definitely be back next year.</p>
        `,
        category: ["Live Sound"],
		image: "/images/mjf2025.png",
		link: "/projects/manchester-jazz-festival-2025",
        dates: "May 2025",
        client: "Manchester Jazz Festival"
	},
    {
		title: "The Secret Number",
		desc: "For this University of Salford assignment, I fully recreated the soundtrack for a clip from <i>The Secret Number</i>, designing and mixing all music, dialogue, and foley from scratch.",
		longDesc: `
            <p>This project involved a comprehensive audio-post-production overhaul of a sequence from the 2012 short film The Secret Number. The objective was to execute a complete sonic reconstruction—removing all original audio and building a world-class soundtrack from the ground up, entirely independent of the original production's reference material.</p>
            <p>Over a ten-week production cycle, I managed the end-to-end audio pipeline, ensuring every sonic element served the film's psychological and mathematical themes. The workflow included:</p>
            <ul class="list-disc list-outside ml-5 space-y-2 mb-6">
                <li><span class="font-semibold">Dialogue Replacement (ADR):</span> Re-recording and performing all character lines to ensure tonal consistency and clarity while maintaining emotional resonance.</li>
                <li><span class="font-semibold">Foley & Sound Design:</span> Capturing and processing organic sound effects and textures to ground the environment. Every footstep, cloth rustle, and prop interaction was performed and edited to match the on-screen action.</li>
                <li><span class="font-semibold">Atmospheric & Background Layers:</span> Synthesising complex background beds to define the room acoustics and spatial depth of the scene's location.</li>
                <li><span class="font-semibold">Original Score:</span> Composing and arranging an original musical accompaniment designed to underscore the narrative tension and character arcs.</li>
            </ul>
            <p>The final phase focused on a meticulous re-recording mix. By utilising advanced spatial positioning and dynamic processing, I blended these disparate elements into a cohesive, immersive 2.0 (Stereo) environment. The result was a polished, professional-grade soundtrack that received high commendation for its technical precision and creative integration.</p>
        `,
        category: ["Post Production", "Sound Design", "Music Production"],
		image: "https://i.ytimg.com/vi/8bbvBrqrlBA/maxresdefault.jpg",
		link: "/projects/the-secret-number",
        dates: "September-December 2025",
        client: "Personal Project"
	},
	{
		title: "Aidiyet: Verbondenheid",
		desc: "<i>Aidiyet: Verbondenheid</i> is a documentary produced by Nisa Ceylan alongside the Tulip Institute. I was responsible for the sound mix.",
		longDesc: `
            <p><i>Aidiyet: Verbondenheid</i> is a documentary about the 60th anniversary of Turkish labour immigration to the Netherlands, produced by Nisa Ceylan alongside the <a href="https://tulipinstitute.org/en/tulip-institute-for-turkish-language-and-culture-english/" target="_blank" class="text-sky-600 hover:underline">Tulip Institute</a>.</p>
            
            <p>When I received the Premiere Pro project file for Aidiyet: Verbondenheid from director/producer (and friend) <a href="https://www.instagram.com/framebynice/" target="_blank" class="text-sky-600 hover:underline">Nisa Ceylan</a>, I had three tasks:</p>
            
            <ul class="list-disc list-outside ml-5 space-y-2 mb-6">
                <li>Clean up audio</li>
                <li>Sync the cleaned up audio files with their respective video tracks</li>
                <li>Full mixdown</li>
            </ul>

            <p>Time constraints were a key as there was a strict deadline for the documentary, so I worked as quickly as possible while also cleaning up as much of the dialogue as possible.</p>
            <p>I used native Adobe Audition plugins for cleaning up audio and major fixes, and Premiere Pro effects for edits that didn't necessarily require extreme detail.</p>
            <p>Once the dialogue and VO was ready, I went back to the beginning and did a full mix of the whole documentary. This included making sure each element of the mix was sitting comfortably.</p>
            <p><i>Aidiyet: Verbondenheid</i> is a very interview-heavy documentary, which meant special care needed to be taken to make sure there were as little inconsistencies as possible between different interviews from different locations, recorded with different equipment.</p>
            <p>The main challenge here was cleaning up background noise which was present in almost every clip - which was an expected (and as a sound engineer looking for more opportunities of practicing his audio restoration skills, very much appreciated) aspect of the project.</p>
            <p>I would like to thank director/producer Nisa Ceylan for trusting me with the sound of her incredible documentary. I would strongly recommend watching the whole thing as it gives a captivating look into the Turkish community in the Netherlands.</p>
            <div class="my-6">
                <div class="relative w-full aspect-video rounded-sm overflow-hidden shadow-sm border border-zinc-100">
                    <iframe 
                        src="https://www.youtube.com/embed/rEFtTV4zYLs" 
                        title="Aidiyet: Verbondenheid" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
                <p class="text-xs text-zinc-400 mt-3 italic text-center">
                    Full documentary posted on the Tulip Institute YouTube channel.
                </p>
            </div>
        `,
        category: ["Post Production"],
		image: "https://static.wixstatic.com/media/a51624_423957ec2eb94b8d8f6685e4fdfe96eb~mv2.png/v1/fill/w_1836,h_1036,fp_0.50_0.50,q_95,enc_avif,quality_auto/a51624_423957ec2eb94b8d8f6685e4fdfe96eb~mv2.png",
		link: "#",
        dates: "July-September 2024",
        client: "Nisa Ceylan & Tulip Institute for Turkish Language and Culture"
	},
	{
		title: "The Race to Sustainability",
		desc: "<i>The Race to Sustainability</i> is a Formula 1 documentary produced by Amber Jones. I was responsible for the sound mix and editing.",
        longDesc: `
            <p>Tasked with creating a 10 minute documentary on any chosen subject matter, University of Salford undergraduate student <a href="https://uk.linkedin.com/in/amber-jones-74390115a" target="_blank" class="text-sky-600 hover:underline">Amber Jones</a> produced and presented a short documentary on the current issues surrounding Formula 1 and its relationship with the sustainability crisis.</p>
            <p>Working closely with Amber through the duration of the production, I mixed and partially recorded sound for the documentary. The two batches of narration, one recorded into a <i>Blackmagic Pocket</i> cinema camera with a <i>RØDE</i> lavalier (lapel) microphone simultaneously with the talking head videos, the other recorded in a non-studio environment using a USB microphone, had massive differences in tonality, background noise, and overall sound. In addition to these, there were bits of audio recorded through Zoom and Teams calls, distorted by noise suppression and compression algorithms.</p>
            <p>My biggest task was to match the narration tones and to bring the video conference recordings to an acceptable state where they wouldn't stand out or distract the audience during the documentary. I did this to the best of my abilities using the limited amount of time I had.</p>
            <p>After the audio was edited and fixed, I went over the final edit on <i>Premiere Pro</i>, making sure audio & video clips were in sync, levels were similar, and there were no issues overall with either the edit or the audio mix.</p>
            <p>The full documentary is available to watch below.</p>
        `,
		category: ["Post Production"],
		image: "https://static.wixstatic.com/media/a51624_3b0eb7c5e857482aa2c056066f45fd24~mv2.jpg",
		link: "#",
        dates: "January-March 2023",
        client: "Amber Jones"
	},
	{
		title: "Glasgow Subway: Field Recording Project",
		desc: "This project is an acousmatic soundscape that utilises manipulated field recordings to construct a continuous, immersive journey through Glasgow's subway system, contrasting industrial mechanical sounds with natural human atmospheres.",
		category: ["Sound Design"],
		image: "https://glasgowsubwaycrawl.com/static/0953b6bc4fd27bada99fac1a2fca07f3/f58be/header-image.jpg",
		link: "#"
	},
	{
		title: "Time in Flames",
		desc: "<i>Time in Flames</i> is an audiovisual composition made up of self-recorded, separate video and audio sources, created with the intention of viewing as an individual piece. The playback incorporates stereo audio and panning, and therefore is suitable for speaker or headphone use. All sounds and videos used have been recorded for the purposes of the composition.",
        longDesc: `
            <p>Tasked with creating an audiovisual piece and writing a critical commentary on it, the video below is my submission.</p>
            <p>I used various techniques including overlaying and colour manipulation.</p>
            <h3 class="text-lg font-semibold mt-3 mb-1">Critical Commentary</h3>
            <h4 class="text-md font-semibold mt-6 mb-1 italic">Time in Flames</h4>
            <p><i>Time in Flames</i> is an audiovisual composition made up of self-recorded, separate video and audio sources, created with the intention of viewing as an individual piece. The playback incorporates stereo audio and panning, and therefore is suitable for speaker or headphone use. All sounds and videos used have been recorded for the purposes of the composition.</p>
            <h4 class="text-md font-semibold mt-6 mb-1">Production & Inspiration</h4>
            <p>With a background in creative video editing using Premiere Pro, I’ve been interested in experimenting with blend modes. I was aware that the Screen mode could produce interesting blending effects between two consecutive graphic layers, which, along with simple opacity automation, is what the edit mainly revolves around.</p>
            <p>Below is how the official Adobe documentation describes the <i>Screen</i> mode:</p>
            <p>“Multiplies the complements of the channel values, and then takes the complement of the result. The result color is never darker than either input colour. Using the Screen mode is similar to projecting multiple photographic slides simultaneously onto a single screen.”</p>
            <p>The <i>Screen</i> mode allowed me to create an effect akin to double-exposure photography, which incorporates a subject inside another subject, seamlessly merging the two images together. The frames above from the sequence that starts on the 37thsecond and goes on until 3 minutes 33 seconds in are good examples of points where the Screen mode is used to represent interconnectivity, and interaction. The two clips represent different people with different personalities, sometimes aligning and sometimes not, often times moving (or living) at different paces.</p>
            <p>The same blend mode allowed the creation of the image below where the flame of a candle seems to be burning inside a guitar.</p>
            <p>For the frame above, the guitar clip was lined up so that the flame would sit between two strings both because it makes sense visually, but also as a suggestion that the moving string affects the flame as it vibrates – in the context of the message of the composition, this can be interpreted as outside forces affecting a life.</p>
            <p>The overall goal of the audio-visual composition is to be an expression of the “journey of life”. To do this, several imageries are used – the candle flame that the busy street clips are overlaid on top of signifies human life, a finite, volatile state of existence which ends suddenly.</p>
            <p>The busy street going in four different directions is the world around the subject, happening all at once without waiting. This image was made by rotating and flipping four copies of the original clip, placing them as a 2x2 grid, and adding and automating the Relief feature of the Emboss effect. The regular purpose of this effect is to give depth by sharpening the edges of objects in the clip. For the composition, I’ve used it to not only sharpen the edges but to clone and separate a layer from the original clip, which ended up creating visuals that resemble the patterns in a Rorschach test.</p>
            <p>With the very first sound on the video being a Shepard scale – an endlessly rising sequence that defies time – the timeless existence before life is shown. The overlaid flames in different (and constantly changing) colours are meant to signify the other lives that cross our paths, some change, some go through quicker than others, and some stay with us.</p>
            <p>This was translated into visuals through the speed at which the different flames rotate, and their changing colours. While the first inverted flame spins at a rate of 30 degrees per 2 frames, the second inverted flame has a spin rate of 60 degrees per 2 frames – this was a conscious choice that predicts and accompanies the accelerating transitions and rhythm of the piece.</p>
            <p>The main video of the burning candle is originally an 8-minute, 3840 x 2160 25fps video. The shots of the candle alone are almost completely untouched, apart from zooming in or masking the clip. For the overlaid clips with changing colours, Premiere Pro’s ASC CDL effect was used, which stands for American Society of Cinematographers Color Decision List and is used to standardise “the exchange of primary colour information.” (Adobe, 2023) Through the use of this effect I was able to manipulate the colours of the clips into other primary colours, and paired with being overlaid on the unchanged clip, this created dimension.</p>
            <p>The “flame through the guitar” imagery was mentioned earlier. This is a key aspect of the composition as it’s both the shot that the rest of the composition builds upon, and technically the specific point that the Screen blending mode is utilised most successfully. The shot from 03:13 to 03:30 is four shots stacked on top of each other and is also the climax of the first part of the composition. The effect is great at removing the black parts of a clip that’s on top of another clip, which is exactly what happened here – the dark background is almost completely removed, allowing just the red candle and the flame itself to be visible from the guitar’s sound hole.</p>
            <h4 class="text-md font-semibold mt-6 mb-1">Reflection</h4>
            <p>By trying to limit the number of different clips used, and instead attempting to focus on how to manipulate the limited number of clips I had recorded to get a varied enough result, my challenge was with challenging my ability and knowledge of Adobe Premiere Pro, the video editing software the composition was created on. As previously mentioned, I was interested in experimenting with the video effects, which is what I did, and ended up with some unexpected results through methods I wasn’t anticipating. The colour emboss effect is one of these effects, which is something I had been avoiding due to a misguided prejudice of thinking of the effect as an outdated gimmick. Once I did some research on its uses and methods, I decided that it would be a good way of showing depth and abstractness, and it worked.</p>
            <p>Overall, the composition reached the point that I was trying to take it to in terms of its symbolism, plot and visuals.</p>
            <h4 class="text-md font-semibold mt-6 mb-1">References</h4>
            <p>Adobe (2023) <i>Color correction effects, Adjust and correct color in Premiere Pro CC</i>. Available at: <a href="https://helpx.adobe.com/premiere-pro/using/color-correction-adjustment.html" target="_blank" class="text-sky-600 hover:underline">https://helpx.adobe.com/premiere-pro/using/color-correction-adjustment.html</a> (Accessed: 12 December 2023). </p>
        `,
		category: ["Sound Design"],
		image: "https://static.wixstatic.com/media/a51624_a40bb87fd9fa4d1682a584908805d556~mv2.png",
		link: "#",
        dates: "September-December 2023",
        client: "N/A"
	},
    {
		title: "Quarantine Music Collabs",
		desc: 'A remote collaboration featuring two reimagined covers from 2020, with remastered versions produced in 2024.',
        longDesc: `
            <p>Read on to listen to the tracks — they're at the end of the text.</p>
            <p>In 2020, during the initial lockdown in Istanbul, I initiated a remote collaborative music project. The workflow involved recording foundational piano parts and distributing them to Etkin Celep for primary guitar tracking. We then layered percussion before sending the stems to various featured artists to complete the arrangements.</p>
            <p>This collaboration resulted in two reimagined covers: Nirvana’s <span class="font-semibold">"Heart Shaped Box"</span> and Céline Dion’s <span class="font-semibold">"My Heart Will Go On."</span> While the original versions were released via the school media society's YouTube channel, I revisited the project in 2024 to apply a professional engineering standard to the mix and master.</p>
            <p>Here is a breakdown of the technical revisions made four years and two degrees later:</p>
            <ul class="list-disc list-outside ml-5 space-y-2 mb-6">
                <li><span class="font-semibold">Foundational Reset:</span> I stripped the project of all legacy "guerilla" processing—removing redundant EQs, free effect plugins, and haphazard automation—to return to the raw source audio and rebuild the mix with intentionality.</li>
                <li><span class="font-semibold">Low-End optimisation:</span> I prioritised the bass performance by Nuri Çelik (SPARK), carving out specific frequency headroom to ensure the low-end provided a solid harmonic foundation without masking the mid-range.</li>
                <li><span class="font-semibold">Solo Transparency:</span> I moved away from aggressive over-processing on the final guitar solos. By focusing on level-balancing and phase-coherent placement rather than artificial spatial effects, I achieved a more natural and impactful transition into the finale.</li>
                <li><span class="font-semibold">Orchestral Expansion:</span> I redesigned the mid-section (1:09 – 2:01), augmenting the original solo flute and violin with a new MIDI brass section. This was carefully integrated to fill the spectral arrangement and add cinematic weight that was missing in the 2020 release.</li>
                <li><span class="font-semibold">Acoustic Restoration:</span> To compensate for the original piano tracking (captured via a Canon 250D internal microphone), I utilized targeted surgical EQ and multi-band compression to recover as much tonal fullness and "body" as possible from the source audio.</li>
            </ul>
            <p>Below you will find the 2024 high-fidelity re-mix of "Heart Shaped Box," followed by the original 2020 video releases for comparative reference.</p>
        `,
		category: ["Music Production"],
		image: "https://static.wixstatic.com/media/a51624_3e6a4119ec1d49a4b010f01b98320a4f~mv2.jpg/v1/fill/w_1280,h_720,fp_0.50_0.50,q_90,enc_avif,quality_auto/a51624_3e6a4119ec1d49a4b010f01b98320a4f~mv2.jpg",
		link: "#",
        dates: "Spring 2020 (Remastered in Summer 2024)",
        client: "N/A"
	},
    {
		title: "Walk to Beach: Acousmatic Sound Design",
		desc: "<i>Walk to Beach</i> is an acousmatic electroacoustic composition in stereo also suitable for playback on quadraphonic speaker setups. All sounds in the composition were recorded or digitally produced by me.",
        longDesc: `
            <p><i>Walk to Beach</i> is an acousmatic electroacoustic composition in stereo also suitable for playback on quadraphonic speaker setups. It is envisioned and designed to be played on headphones but has no strict prerequisite regarding how it is presented. All sounds in the composition were recorded or digitally produced by me.</p>
            <p>The composition is inspired by a very specific childhood memory – a hotel’s walking path from our room to the beach. I wanted to base my composition around a very distinct sound I remember hearing during those walks: mourning dove calls.</p>
            <h4 class="text-md font-semibold mt-6 mb-1 italic">Production and Inspiration</h4>
            <p>Early in the project planning stage, I discovered Natasha Barrett’s acousmatic composition work, <i>Red Snow</i>. The way it was formed and the meanings behind the decisions felt similar to my plans, although slightly more abstract.</p>
            <p>In her description of <i>Red Snow</i>, Barrett says she has “attempted to concentrate the beauty and violence of a natural landscape into the 'microclimate' of the work - forming a new 'organisational space' yet reflecting, in acoustic form, the natural world and source inspiration.” <i>Red Snow</i> acts like the audio representation of a terrarium that she feels she’s inside of. She also says the piece is “structurally balanced, not in a symmetrical sense, but through the 'life' of one articulation resulting in a subsequent and counterbalancing reaction,” which is what I set out to achieve. (Barrett, 2002) I wanted to find the balance between using completely natural or literal sounds with minimal modifications and sounds that are also natural but modified heavily to be used in new contexts, and perhaps as metaphors of concepts or situations. The sounds have width, but the constant envelope fluctuations signify approaching a boundary that can’t be crossed.</p>
            <p>One such example is the drone-like sound that’s present until a little over halfway through the composition, which is meant to evoke the feeling of sea being present but not visible, so it isn’t a direct sound of the sea – it’s the sound of a water tap running, with the beginning and the end cut out to get the middle bit, stretched from the beginning of the project until where the audio clip was intended to end. The result was an abstract sound which still has some connotations of water flow, but mostly serves as a bed for all the other sound effects that build on top of it, combined with an ambience recording with surround quadraphonic panning automation (as well as granular synthesis and EQ).</p>
            <p>To indicate a reverse flow of time, I reversed the crowd sound files, then applied spatialisation automations to both beds to blend them better. There is minimal additional processing, so the human element is still discernible, but any sound that’s being made (including laughter) sounds unnatural, out of place, and otherworldly. There is also a very subtle granular synthesis processing on the crowd noise which adds texture and acts as another barrier between the listener and the real world.</p>
            <p>The ambience recording stays in the same spatial position for the first half of the composition but starts travelling after the second half. This is done through surround panning, and aims to evoke the sense of travel, or aimless wandering, through its seemingly random pans to different directions, and with the high-cut filter taking out anything below 176 Hz, the ambience that’s already been placed far away from the listener becomes even more directionless. In the Computer Music Journal’s Vol.2 No.2 edition, Curtis Road concludes his article titled <i>Introduction to Granular Synthesis</i> by stating that “granular synthesis adds a set of distinct and interesting colours and textures to the palette of sounds made available by digital technology.” What the granular synthesis helps to do in this situation with a high fade-in and low fade-out is give the ambience a pulsating effect which gives a texture to an otherwise “normal” recording.</p>
            <p>First, non-musical sounds were selected from my pre-existing library of self-recorded sounds. I specifically steered clear of musical instruments or any melodic sounds as I felt it would take away from the immersion.</p>
            <p>All sounds have been manipulated inside REAPER, using native and third-party plug-ins. At least one plug-in in the GRM Tools collection has been applied to each layer in the composition to adjust everything from resonant frequencies to spatial behaviours, with the intention of merging sounds so that no single sound would stick out (apart from the bird call) – all sounds come together to build a soundscape, and any movement within that soundscape happens as one change that effects all layers instead of singular changes.</p>
            <p>Any motivation for sound manipulation was conceptual, such as the extremely slowed-down sound of a water tap running. In the composition, this signifies the sea behind obstacles, which we end up reaching towards the second half.</p>
            <p>I wanted to avoid repetition as much as possible, so I decided to add randomised fluctuations to sounds by running them through GRM Tools’s <i>Doppler</i>, <i>Delays</i>, <i>Shuffler</i>, <i>Freeze Stereo</i>, <i>Comb Stereo</i>, and <i>Reson</i> effects. Initially these plugins weren’t selected consciously – they were applied one by one to each track and once the result was close enough to the desired effect, they were left alone.</p>
            <p>The beginning of the second half opens with a downward Shepard glissando, which was created by putting the whistle/mourning dove clip through a sampler, adding EQ, copying it twice (one for higher octave the other for lower octave), and finally automating the volumes of the layers. The glissando acts as a gateway between two timeless spaces, and they will independently exist in their own worlds, but the listener is now travelling from one to the other.</p>
            <h4 class="text-md font-semibold mt-6 mb-1">Reflection</h4>
            <p>Alongside the Shepard glissando, I considered adding a Risset Rhythm to create rhythmic ambiguity but later scrapped the idea as creating the Shepard glissando with a recorded sample proved more difficult than expected. The techniques I’ve used were personally challenging and new, but I believe I’ve managed to adapt to them.</p>
            <p>I believe the composition evokes a sense of nostalgia within an atmosphere that feels unreal. Convolution could have been utilised more, especially to support the sense of timelessness, however, overall, the composition has mostly reached the point I wanted to bring it.</p>
            <h4 class="text-md font-semibold mt-6 mb-1">References</h4>
            <p>Barrett, N. (2002). Microclimate II: Red Snow. [online] Natashabarrett.org. Available at: <a href="http://www.natashabarrett.org/mc2.html" target="_blank" class="text-sky-600 hover:underline">http://www.natashabarrett.org/mc2.html</a> [Accessed 13 Nov. 2023].</p>
            <p>Roads, C. (1988). Introduction to granular synthesis. Computer Music Journal, [online] 12(2), pp.11–13. Available at: <a href="http://www.jstor.org/stable/3679937" target="_blank" class="text-sky-600 hover:underline">http://www.jstor.org/stable/3679937</a> [Accessed Nov. 2023].</p>
        `,
		category: ["Sound Design"],
		image: "https://static.wixstatic.com/media/a51624_8acd774ee60f4bb78dbf511d4025b9f2~mv2.jpg/v1/fill/w_1836,h_1036,fp_0.50_0.50,q_90,enc_avif,quality_auto/a51624_8acd774ee60f4bb78dbf511d4025b9f2~mv2.jpg",
		link: "#",
        dates: "November-December 2023",
        client: "N/A"
	},
    {
		title: "Cannabis Museum Amsterdam - Audio Guide",
		desc: 'Collaborating with sound engineer Can Ülgenci, I developed a diverse multi-language soundscape and score for the Amsterdam Cannabis Museum, spanning centuries of musical styles from ancient Tajik ceremonies to contemporary 21st-century themes.',
        longDesc: `
            <p>I assisted sound engineer Can Ülgenci in creating the audio guide soundscape and score for the <a href="https://cannabismuseum-amsterdam.com/" target="_blank" class="text-sky-600 hover:underline">Cannabis Museum</a> in Amsterdam.</p>
            <p>The story of cannabis begins centuries ago, which means my task was to create different styles of music for a very wide range of instances from Tajiki funeral ceremonies to the depiction of the 21st century.</p>
            <p>This was a fun and very challenging project that I'm proud of. The audio guide is expected to be launched in May 2023, in multiple languages.</p>
            <p>You can listen to the score albums on <a href="https://open.spotify.com/album/73iol4FuicduHooYhX3SMM?si=5VULc6hfSYqiFnuSJh-ljw" target="_blank" class="text-sky-600 hover:underline">Spotify</a> and <a href="https://music.apple.com/tr/album/cannabis-museum-amsterdam-original-audio-guide-soundtrack/1707638564" target="_blank" class="text-sky-600 hover:underline">Apple Music</a>.</p>
            <p>You can also listen to the whole audio guide by <a href="https://cannabismuseum-amsterdam.com/audiotour/" target="_blank" class="text-sky-600 hover:underline">clicking here</a>.</p>
        `,
		category: ["Music Production", "Sound Design"],
		image: "https://static.wixstatic.com/media/a51624_56803e61ece242f7a63957f4c426078f~mv2.jpg/v1/fill/w_1199,h_734,al_c,q_85,enc_avif,quality_auto/a51624_56803e61ece242f7a63957f4c426078f~mv2.jpg",
		link: "#",
        dates: "January-April 2023",
        client: "Cannabis Museum Amsterdam"
	},
    {
		title: "VR Game Audio Design",
		desc: 'I designed a multi-room spatial audio experience for a VR environment, using cross-adaptive processing and interactive soundscapes to enhance immersion within distinct digital spaces like hangars and living rooms.',
        longDesc: `
            <h4 class="text-lg font-semibold mb-1 italic">Goals & aims</h4>
            <p>This individual assignment looks at the design and implementation of a virtual reality environment with audio, rendered using a variety of spatial audio methods within the Unity engine.</p>
            <p>This provides familiarity with game audio design, sound effect production, acoustic propagation, and other key audio properties utilised during the project.</p>
            <h4 class="text-lg font-semibold mt-6 mb-1 italic">Sound Bed</h4>
            <p>I’ve used an ambisonic recording of a crowded airport as my sound bed. This is anchored near where the player spawns and stays there, while acting as a bed audio.</p>
            <p>This audio is outputted through a specific Bed Audio mixer which is controlled in the main Audio Mixers tab.</p>
            <p>The Spatial Blend is tuned to 3D so that it acts as the atmosphere sound.</p>
            <div class="my-10">
                <img 
                    src="/images/projects/vr-game-audio-design/vr-1.jpg" 
                    alt="The Spatial Blend is tuned to 3D so that it acts as the atmosphere sound." 
                    class="w-full rounded-sm shadow-sm border border-zinc-100"
                />
            </div>
            <h4 class="text-lg font-semibold mb-1">Toggleable Objects</h4>
            <p>Some objects are assigned audio files that can be toggled on and off. These give the player something to interact with.</p>
            <p>In Room 1, the toggleable object is the radio which plays a recording of <i>Maple Leaf Rag</i> when toggled on, as well as blinking a yellow light in sync with the sound.</p>
            <p>In Room 2, the toggleable object is the electric saw which can be turned on and off by the player.</p>
            <p>Both objects start in their “OFF” states.</p>
            <div class="flex flex-col md:flex-row gap-4 my-10">
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-2.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-3.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
            </div>
            <p>The Radio Music Audio Mixer Group Controller has a total of four effects applied on it to create the final sound.</p>
            <p>The highpass and lowpass filters create the classic radio sound from a clean recording of a piano.</p>
            <p>The <i>OculusSpatializerReflection</i> add-on allows monophonic sound sources to be spatialized in 3D relative to the user’s head location. In addition, it can be used for audio propagation, which provides real-time reverb and occlusion simulation based on game geometry. This was used on the walls, ceiling, and the floor.</p>
            <div class="flex flex-col md:flex-row gap-4 my-10">
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-4.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-5.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-6.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
            </div>
            <h4 class="text-lg font-semibold mb-1">Interactable Objects</h4>
            <p>The scenes have interactable objects which the player can pick up with the controller. These objects have sounds that play when they hit somewhere like the walls or the floor.</p>
            <p>Every object has two sounds that interchange randomly for variation.</p>
            <p>The ONSP Audio Source script is deprecated and is replaced by VRC_SpatialAudioSource, however for the purposes of this project the legacy ONSP Audio Source script is used.</p>
            <p>This script determines how the object’s sound reacts to changing distance.</p>
            <div class="my-10">
                <img 
                    src="/images/projects/vr-game-audio-design/vr-7.jpg"
                    alt="This script determines how the object’s sound reacts to changing distance." 
                    class="w-full rounded-sm shadow-sm border border-zinc-100"
                />
                <p class="text-xs text-zinc-400 mt-2 italic text-center"></p>
            </div>
            <div class="flex flex-col md:flex-row gap-4 my-10">
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-8.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-9.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
            </div>
            <p>The <i>XR Grab Interactable</i> script allows objects to be grabbable. It’s also what determines the features of the movement of objects it’s assigned to.</p>
            <p>As seen below, the script determines the Velocity, Throw Smoothing, and other key properties.</p>
            <div class="flex flex-col md:flex-row gap-4 my-10">
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-10.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-11.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-12.webp"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
            </div>
            <h4 class="text-lg font-semibold mb-1">Propagation</h4>
            <p>The Audio Propagation feature of the Oculus Audio Spatializer provides real-time reverb and occlusion simulation based on game geometry (i.e. the materials of the walls/ceiling/floor, the shape, the height, etc.). The system models both indoor and outdoor spaces, but it’s only used for indoors spaces for this project.</p>
            <p>First step to get the propagation of a room boundary is to generate the ONSP propagation geometry through the script.</p>
            <p>Once this geometry is generated, the ONSP Propagation Material script is applied to calculate the Absorption and Scattering properties of the materials on the frequency spectrum.</p>
            <p>Propagation creates the difference between rooms in terms of audio properties</p>
            <div class="flex flex-col md:flex-row gap-4 my-10">
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-13.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-14.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
            </div>
            <h4 class="text-lg font-semibold mb-1">Audio Difference Between Rooms</h4>
            <p>The two rooms have different sound characteristics and the objects from each room won’t be heard the same way in the other room.</p>
            <p>To simulate this, two reverb/reflection zones have been created which encapsulate the two rooms (one for each room), and they were set up in a way to replicate the reverb/reflection properties of the types of rooms.</p>
            <p>Room 1 is a hangar with concrete walls and metal objects and Room 2 is a living room with wooden floors and wooden/metal objects.</p>
            <div class="my-10">
                <img 
                    src="/images/projects/vr-game-audio-design/vr-15.jpg"
                    alt="" 
                    class="w-full rounded-sm shadow-sm border border-zinc-100"
                />
                <p class="text-xs text-zinc-400 mt-2 italic text-center"></p>
            </div>
            <p>When the player is going between the two rooms, the sound qualities change depending on where the player is stood. This is achieved by the combination of mixer snapshots and the Reflection Zones.</p>
            <p>Below are the mixer settings for Room 1 (hangar) and Room 2 (living room). As evident from the mixer snapshots, the Electric Saw, which is in Room 2, is louder in the Room 2 snapshot compared to Room 1.</p>
            <div class="flex flex-col md:flex-row gap-4 my-2">
                <figure class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-16.jpg" 
                        alt="Hangar (Room 1) screenshot" 
                        class="w-full rounded-sm" 
                    />
                    <figcaption class="text-xs text-zinc-400 mt-2 italic">Hangar (Room 1)</figcaption>
                </figure>
            </div>
            <div class="flex flex-col md:flex-row gap-4 my-2">
                <figure class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-17.jpg" 
                        alt="Living Room (Room 2) screenshot" 
                        class="w-full rounded-sm" 
                    /> 
                    <figcaption class="text-xs text-zinc-400 mt-2 italic">Living Room (Room 2)</figcaption>
                </figure>
            </div>
            <h4 class="text-lg font-semibold mb-1">Project Organisation</h4>
            <div class="flex flex-col md:flex-row gap-4 my-10">
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-18.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <img 
                        src="/images/projects/vr-game-audio-design/vr-19.jpg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
            </div>
        `,
		category: ["Music Production", "Sound Design"],
		image: "https://static.wixstatic.com/media/a51624_24a84a4ab54244b0ae69adba6b8da36a~mv2.jpg/v1/fill/w_806,h_454,fp_0.50_0.50,q_90,enc_avif,quality_auto/a51624_24a84a4ab54244b0ae69adba6b8da36a~mv2.jpg",
		link: "#",
        dates: "December 2022",
        client: "N/A"
	},
    {
		title: "Shock Radio Live Lounges",
		desc: "Shock Radio is the University of Salford's student-run radio station, and I was the 2022-2023 Head of Tech. Through this role, I recorded and mixed the <i>Live Lounge</i> concert series where artists come in for an interview and perform their songs.",
        longDesc: `
            <p>I assisted sound engineer Can Ülgenci in creating the audio guide soundscape and score for the <a href="https://cannabismuseum-amsterdam.com/" target="_blank" class="text-sky-600 hover:underline">Cannabis Museum</a> in Amsterdam.</p>
            <p>The story of cannabis begins centuries ago, which means my task was to create different styles of music for a very wide range of instances from Tajiki funeral ceremonies to the depiction of the 21st century.</p>
            <p>This was a fun and very challenging project that I'm proud of. The audio guide is expected to be launched in May 2023, in multiple languages.</p>
            <p>You can listen to the score albums on <a href="https://open.spotify.com/album/73iol4FuicduHooYhX3SMM?si=5VULc6hfSYqiFnuSJh-ljw" target="_blank" class="text-sky-600 hover:underline">Spotify</a> and <a href="https://music.apple.com/tr/album/cannabis-museum-amsterdam-original-audio-guide-soundtrack/1707638564" target="_blank" class="text-sky-600 hover:underline">Apple Music</a>.</p>
            <p>You can also listen to the whole audio guide by <a href="https://cannabismuseum-amsterdam.com/audiotour/" target="_blank" class="text-sky-600 hover:underline">clicking here</a>.</p>
        `,
		category: ["Live Sound", "Music Production"],
		image: "https://static.wixstatic.com/media/a51624_2a552777ace043febbcac98f78ee84e6~mv2.jpg/v1/fill/w_1113,h_628,fp_0.50_0.50,q_90,enc_avif,quality_auto/a51624_2a552777ace043febbcac98f78ee84e6~mv2.jpg",
		link: "#",
        dates: "January-April 2023",
        client: "Cannabis Museum Amsterdam"
	},
];