export const getSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-');
import { BASE_URL } from 'astro:env/client';

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
		image: "/umutyelbasi/images/mjf2025.png",
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
            <div class="my-6">
                <div class="relative w-full aspect-video rounded-sm overflow-hidden shadow-sm border border-zinc-100">
                    <iframe 
                        src="https://www.youtube.com/embed/ws3SS6apY3I"
                        title="The Race to Sustainability - A short documentary by Amber Jones" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
        `,
		category: ["Post Production"],
		image: "https://static.wixstatic.com/media/a51624_3b0eb7c5e857482aa2c056066f45fd24~mv2.jpg",
		link: "#",
        dates: "January-March 2023",
        client: "Amber Jones"
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
		category: ["Sound Design", "Audiovisual"],
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
    {
		title: "Uskudar American Academy 2022 Talent Show - Front of House Mix",
		desc: "I returned to my alma mater to lead the live sound mixing for a complex, multi-ensemble concert, overseeing stage setup and sound reinforcement for a diverse range of performers.",
        longDesc: `
            <p>I was responsible for setting up sound equipment including microphones and monitor speakers for a concert consisting of multiple large bands, a choir, solo artists and non-musician performers.</p>
            <p>Due to the nature of the venue (the school auditorium), some microphones and the subwoofer had to be reconnected to the desk, which I also did. This was relatively easy as I had helped with the setup of the auditorium when the sound system was renovated in 2018.</p>
            <p>Below is my post on LinkedIn about the event:</p>
            <div style="width: 100%; display: flex; justify-content: center;">
                <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7014718684451471360" 
                    height="1400" 
                    width="100%" 
                    frameborder="0" 
                    allowfullscreen="" 
                    title="Embedded post"
                    style="max-width: 504px; border: 1px solid #e2e8f0; border-radius: 8px;"
                ></iframe>
            </div>
        `,
		category: ["Live Sound"],
		image: "/umutyelbasi/images/projects/uaa_piano.jpeg",
		link: "#",
        dates: "December 2022",
        client: "Uskudar American Academy, İstanbul"
	},
    {
		title: "Step Ladder Records 4-Band Special (Modern Jazz, Funk & Fusion) - Recording, Mix & Master",
		desc: "I recorded multitrack live performances for four bands at The Old Abbey Taphouse and performed full mixing and mastering for Step Ladder Records.",
        longDesc: `
            <p>I was tasked with recording sets played by four bands: Connor Lynn Quartet, Pink Familee, Plantfood, and Paltin.</p>
            <p>I recorded multitracks on Logic Pro X through a USB connection from the Behringer X32 Compact mixing desk at The Old Abbey Taphouse.</p>
            <p>I then divided these multitracks into their respective bands, exported each set of multitracks into a folder, and imported these into four different Pro Tools sessions where I mixed each band's performance on a Solid State Logic Duality Delta mixing console.</p>
            <p>Each set was around 40 minutes, so mixing everything took me a few weeks. Once all four sets were mixed and mastered, I delivered them to Step Ladder Records who intended to use them for a radio broadcast but hasn't been able to yet.</p>
            <p>The mixes are available for listening on <a href="https://drive.google.com/drive/folders/1A_WOkEgz6nODJcxRvmUUBLcxkqLkva_d?usp=sharing" target="_blank" class="text-sky-600 hover:underline">this link</a>.</p>
        `,
		category: ["Live Sound", "Music Production"],
		image: "https://static.wixstatic.com/media/a51624_8a6bcf6fe0c441f192f40307a5894d92~mv2.png/v1/fill/w_3744,h_2808,al_c,q_90/a51624_8a6bcf6fe0c441f192f40307a5894d92~mv2.webp",
		link: "#",
        dates: "June-October 2023",
        client: "Step Ladder Records (https://www.stepladderrecords.co.uk)"
	},
    {
		title: "Cymatics: MSc Sound Design and Audiovisual Practice Portfolio",
		desc: "I constructed custom physical cymatics rigs using speakers, brass plates, and water dishes to transform acoustic vibrations into visible geometric patterns, documenting the results through a series of experimental audiovisual compositions.",
        longDesc: String.raw`
            <h4 class="text-lg font-semibold mb-1 text-sky-600">INTRODUCTION</h4>
            <p>For my portfolio, I've created a series of audiovisual works based on the concept of cymatics, which is the study of visible sound and vibration. These works were produced by the construction of specialised rigs with speakers as the basis.</p>
            <p>I first came across a demonstration of cymatics on Nigel John Stanford's YouTube channel, through his video titled <i>"CYMATICS: Science Vs. Music - Nigel Stanford"</i>. In the video, Stanford, a musician and engineer from New Zealand, uses the concept of cymatics to create visualisations for his music. The rigs he uses ranges from Chladni plates (which will be mentioned later in this commentary) and speaker dishes to ferrofluids and Ruben's Tubes.</p>
            <p>Once I started doing research, I discovered Hans Jenny's work on cymatics which went into detail regarding the physics and science behind the subject. Jenny, Swiss physician, natural scientist, and the father of the term cymatics, opens his book on the subject with the following words:</p>
            <blockquote class="border-l-4 border-sky-600 bg-sky-50/70 p-4 my-6 italic text-zinc-700">
                "Whenever we look in Nature, animate or inanimate, we see widespread evidence of periodic systems. (...) Events then, do not take place in a continuous sequence, in a straight line, but are in a continual state of constant vibration, oscillation, undulation and pulsation."
            </blockquote>
            <p>As my initial goal was to find ways to implement cymatics in my creative process, not unlike a musical instrument, I put Jenny's work aside for a moment to find examples of creative uses of cymatics, similar to the video by Nigel John Stanford (which would go on to be the main inspiration behind the construction of my own videos).</p>
            <p>One project I found was by Daniel Breuer and Jasper Kirton-Wingate who have created a website, discussing creative uses of cymatics, in which they discuss several artists working with cymatics, and how cymatics can be a creative output that lets the artist simultaneously express himself with visuals and sounds, without the need to think about one or the other and instead focusing on a single creative output - because the audio output will create the visual output itself. (Breuer & Kirton-Wingate, 2016) In their website, the first video they've shared is by Dr Gabriel Kelemen, called <i>"evolution"</i>. I was especially interested by the lighting techniques Kelemen used to enhance the cymatics patterns created on the dish of water he's using, which was an inspiration for how I built my filming setup for my own water rig. (Kelemen, 2007)</p>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">BUILDING THE CYMATICS RIG</h4>
            <p>For the purposes of the portfolio, I wanted to focus on two demonstrations of cymatics: powder on a plate (or a Chladni plate) and a petri dish filled with water, placed above a speaker.</p>
            <p>In his book, Hans Jenny mentions E. F. P. Chladni, who "discovered the sonorous figures named after him while he was investigating Lichtenberg figures. With a violin bow he stroked metal plates sprinkled with powder and was thus able to make the vibration processes visible."</p>
            <p>This method of vibrating a metal plate with powder on top ended up being the basis for the main rig of the experiment. The difference is the way it was constructed.</p>
            <p>The original Chladni plate setup worked by vibrating the plate, sprinkled with powder, using a physical bow, like one used for stringed instruments. As the plate vibrates, the powder will find its way to the non-vibrating sections of the surface and form patterns, dependant on the frequency of the vibration. Through experimentation, Chladni devised an equation for the zeros of the standing wave on a square Chladni plate constrained from a single point (generally the centre to hold the plate flat) to predict the patterns that specific frequencies will yield:</p>
            <div class="math-block py-0 text-center text-lg">
                $$\cos\left(\frac{n\pi x}{L}\right) \cdot \cos\left(\frac{m\pi y}{L}\right) - \cos\left(\frac{m\pi x}{L}\right) \cdot \cos\left(\frac{n\pi y}{L}\right) = 0$$
            </div>
            <p>Below is a table of some possible patterns:</p>
            <div class="my-10">
                <img 
                    src="${import.meta.env.BASE_URL}/images/projects/cymatics/cymatics-1.webp"
                    alt="" 
                    class="w-full rounded-sm shadow-sm border border-zinc-100"
                />
            </div>
            <p>Experiments have revealed that the powder particles accumulate at the sections of the plate where there are no vibrations. Another way of saying this is that at any given vibration frequency of the plate, anywhere that doesn't have a particle accumulation is vibrating. For my portfolio, I haven't delved into the physics in depth and instead took Chladni's theory and Jenny's experiments as a basis for experimenting with cymatics rigs to find ways of visualising music through physical devices.</p>
            <p>Most of Jenny's experiments use crystal oscillators as the actuator/for frequency determination, and brass plates as the base where the powder is poured onto (and therefore where the patterns emerge on). For the first iteration of my portfolio rig, I've used the speaker of a guitar amp, a preamp, a metal cooking tray, and a plastic cup as to connect the speaker cone and the tray, also transmitting the vibrations. Below is an image of what this looks like.</p>
            <div class="flex flex-col md:flex-row gap-4 my-2">
                <figure class="flex-1">
                    <img 
                        src="${import.meta.env.BASE_URL}/images/projects/cymatics/cymatics-2.webp"
                        alt="The plastic cup has a hole cut in the middle of its base, through which a metal screw was put, which was then screwed through the middle of the cooking tray." 
                        class="w-full rounded-sm" 
                    /> 
                    <figcaption class="text-sm text-zinc-500 mt-4 italic">The plastic cup has a hole cut in the middle of its base, through which a metal screw was put, which was then screwed through the middle of the cooking tray.</figcaption>
                </figure>
            </div>
            <p>The idea was to get the vibrations from the speaker cone with the circular base of the cup, concentrate them onto a single point with the screw, and then vibrate the plate/tray from its middle. The plastic of the cup is thin but sturdy enough to hold up the plates and transfer the vibrations equally.</p>
            <p>Once tested, it was clear that the tray was too large for the purposes of the experiment, both in dimensions and weight. Vibrations could be observed, but they were focused too much on the outer edges and corners of the tray and once the sand particles got to these points, there was no way for them to get back to the centre to move to form a pattern, or to move in any other way apart from vibrating randomly.</p>
            <p>The tray was replaced by a custom cut 20cm square brass plate, the material and size of which was selected to reproduce Chladni's original experiment as closely as possible. There aren’t any specifications on the exact size of the plate, but the material is specified as brass, and the size was chosen based on my experience with the cooking tray. Below is an image of what this rig looks like.</p>
            <div class="my-10">
                <img 
                    src="${import.meta.env.BASE_URL}/images/projects/cymatics/cymatics-3.webp"
                    alt="" 
                    class="w-full rounded-sm shadow-sm border border-zinc-100"
                />
            </div>
            <p>The second rig, the petri dish filled with water, was simpler to make. As the dish is already round, once the dimension was chosen as one that's slightly larger than the one of the speaker, the only thing left was sticking the dish onto the speaker cone using epoxy glue. To have the ability to use both rigs at the same time, this rig is built on a second, smaller speaker.</p>
            <p>Once the glue cured, the dish was filled with water and the rig was tested by sending signals through the second channel of the preamp that was used for the Chladni plate speaker, giving me the ability to have two independent cymatics rigs. Below is what this rig looks like.</p>
            <div class="my-4">
                <img 
                    src="${import.meta.env.BASE_URL}/images/projects/cymatics/cymatics-4.png"
                    alt="" 
                    class="w-full rounded-sm shadow-sm border border-zinc-100"
                />
            </div>
            <p>The dish gets the vibrations from the speaker cone that it's glued onto, therefore vibrating an equal amount from all directions. This results in patterns in the water that change with each frequency - similar to what happens with the powder in the Chladni plate experiment - but this time it's more difficult to distinguish the differences.</p>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">EXPERIMENTS & PORTFOLIO PIECES</h4>
            <p>The signal generator I've used is the native Test Oscillator plug-in in Logic Pro X on my laptop, which is connected to a Scarlett 2i2 audio interface, which is then connected via audio jack cables to the preamp.</p>
            <p>The signal into the preamp comes through the Scarlett 2i2 audio interface, which has a pair of L/R jack outputs which go into inputs 1 and 2 of the preamp - therefore if I want to send a DAW channel to only one speaker and another channel only to the other speaker, I can do this by panning each DAW channel to whichever direction's output each speaker's input is connected to.</p>
            <p>Before the resonant frequency experiment, to have a starting point of testing resonant frequencies of the plate, a somewhat crude experiment was conducted, where the plate was flicked three times, and the sound of this was recorded. The recording was then put into Logic Pro X, and using the Graphic EQ plug-in, the more prominent frequencies in the ringing were determined.</p>
            <p>The most prominent peaks were observed at 170 Hz and 535 Hz, as well as a smaller peak at 1800 Hz. I also knew from having done a large-scale sine sweep when testing whether the rig worked, that there was resonance around 100 Hz, so a starting point of 80 Hz was set (to test whether I had missed any frequencies below 100 Hz).</p>
            <p>Then, a packet of colourful sand was poured on the plate. The test consisted of playing sine sweeps between frequencies 100 Hz apart (100-200, 200-300, 300-400, ..., 1000-1100, etc.) with a sweep time of 30 seconds at each interval, which gave me enough time to detect any hints of movement of the sand particles, which then allowed me to take a note of the frequency at which this movement happened as accurately as possible (as it would be a blink-of-an-eye moment before the frequency indicator would continue with the rest of the sweep), which then allowed me to test individual frequencies around the frequency that I noted down.</p>
            <p>To determine whether a frequency was resonant or not, I looked at the shapes created by the powder on the plate when there is signal present. If the powder, without any external force, goes into a symmetrical pattern (some irregularities are expected due to human error in setting up the rig or imperfections in the system, such as miniscule bumps or curves on the plate), then the frequency that the pattern appears in is a resonant frequency of the plate/surface. Below are some patterns that appeared, and the frequencies they appeared in:</p>
            <h5 class="text-md font-medium mb-1">Photo (left) and drawing (right) of cymatics pattern at 260Hz:</h4>
            <div class="flex flex-col md:flex-row gap-4 my-4">
                <div class="flex-1">
                    <img 
                        src="${import.meta.env.BASE_URL}/images/projects/cymatics/260hz-1.webp"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <img 
                        src="${import.meta.env.BASE_URL}/images/projects/cymatics/260hz-2.webp"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
            </div>
            <h5 class="text-md font-medium mb-1">Photo (left) and drawing (right) of cymatics pattern at 527Hz:</h4>
            <div class="flex flex-col md:flex-row gap-4 my-4">
                <div class="flex-1">
                    <img 
                        src="${import.meta.env.BASE_URL}/images/projects/cymatics/527hz-1.webp"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <img 
                        src="${import.meta.env.BASE_URL}/images/projects/cymatics/527hz-2.webp"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
            </div>
            <h5 class="text-md font-medium mb-1">Photo (left) and drawing (right) of cymatics pattern at 1020Hz:</h4>
            <div class="flex flex-col md:flex-row gap-4 my-4">
                <div class="flex-1">
                    <img 
                        src="${import.meta.env.BASE_URL}/images/projects/cymatics/1020hz-1.jpeg"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
                <div class="flex-1">
                    <img 
                        src="${import.meta.env.BASE_URL}/images/projects/cymatics/1020hz-2.webp"
                        alt="" 
                        class="w-full h-full object-cover rounded-sm border border-zinc-100 shadow-sm"
                    />
                </div>
            </div>
            <p>Based on these demonstrations, it can be inferred that as the resonant frequency increases, the complexity of the pattern also increases - the higher the frequency, the more complex the pattern.</p>
            <p>For the dish of water there was no specific resonant frequency, as it reacted to almost all frequencies and sounds sent through, however the lower frequency sounds seemed to get a larger reaction.</p>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">CREATING THE AUDIOVISUAL DEMONSTRATION</h4>
            <p>Once enough of these resonant frequencies were found, the next step was to create and/or adapt pieces of music or sound art based on these frequencies. To prepare for the composition/production process, I used the sine wave generator of the native Test Oscillator plug-in on Logic to record 8 bars for each of the frequencies, which were then used as support for the various instruments and synthesisers that later found their place within pieces.</p>
            <p>One challenge at this point was the fact that most of the resonant frequencies didn't correspond to musical notes. The solution was transposing the notes up or down using semitones and cents. Below is an example:</p>
            <div class="text-center pt-0">
                $$\text{527 Hz is a resonant frequency of the plate. The closest note to this is C5, which is 523 Hz.}$$
            </div>
            <div class="math-block pb-0 text-center text-lg">
                $$\frac{12 \log \frac{523}{527}}{\log 2} = -0.1319041847 \approx -0.132$$
            </div>
            <p>There are approximately 0.132 semitones between the two frequencies, which is very slightly higher than 13 cents. So, theoretically, when I use the Pitch Shifter on a recorded instance of a C5 note to bring it up 13 cents, the note should create resonance on the plate. This, of course, was tested and confirmed to be accurate.</p>
            <p>For the first track, several different virtual instruments from Logic Pro X's built-in list were used, including <i>Anthemic Lead</i> with the <i>AUPitch</i> legacy effect added after a 260 Hz boost (sent to both the Chladni setup and the water setup), and the Classic Electric Piano for the melodies (sent only to the water setup due to its flexibility with frequencies). In addition, as the Chladni plate needs a very high volume and sonorous signal for the patterns to form, the sine wave signals are paired up with their corresponding notes on the <i>Anthemic Lead</i> layer, as well as being used as base chords.</p>
            <div class="my-4">
                <img 
                    src="${import.meta.env.BASE_URL}/images/projects/cymatics/cymatics-5.avif"
                    alt="" 
                    class="w-full rounded-sm shadow-sm border border-zinc-100"
                />
            </div>
            <p>A note that didn't need any transposition was A3, the frequency of which is exactly 220 Hz, coincidentally one of the plate's resonant frequencies.</p>
            <p>The major challenge was getting the Chladni plate to react as quickly as possible to the frequency changes in order to overcome the limitations of having to hold a note for long enough to form a pattern, and then go onto the next note and hold that for long enough to form the next pattern, and not have incomplete or incoherent patterns, hence the assignment of the visualisation of drones and long base chords.</p>
            <p>Not fully satisfied with limiting myself to oscillators and sine waves, I tried running one of my guitar-based compositions through the rig and found that, as long as the notes I included were close enough to the resonant frequencies of the plate, I could get great results both on the plate and the liquid cymatics rig. However, as the Chladni rig needs a very loud and strong signal to create the patterns, the sand on the plate wasn't being triggered by the drone synth alone.</p>
            <p>For this piece and a majority of other pieces utilising the Chladni plate, I combined the synthesisers/instruments with sine waves in the resonant frequencies that would be the closest to the notes played and recorded the result on the plate, which is what's edited into the final video over a bounce of the tracks with their original instrumentations.</p>
            <p>After the video of the first, purpose-made piece was completed, the rest of the videos were based on a selection of my pre-existing compositions, with adjustments and alterations where necessary, such as pairing weaker instruments with a sine wave in the corresponding notes/frequencies to get the desired effect.</p>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">THE VIDEOS</h4>
            <p>I wanted to find a creative way of breaking the potential monotony that a repetitive collection of videos of the same two rigs would bring. The main way of doing this was the various styles and instrumentations used throughout the musical pieces, which I've produced over the last few years, which all provide different frequency and timbre content. Additionally, another creative aspect of the portfolio is how the videos are edited.</p>
            <p>The editing was loosely inspired by my own project, "Time in Flames", produced earlier during the course. They aren't recreations, but I built on top of the techniques I used (such as overlaying multiple videos on top of each other). The piece that this is most evident in is the <i>Space Platform Theme</i> video.</p>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">Space Platform Theme</h4>
            <p>The piece starts by focusing on Chladni patterns and as it develops, incorporates the water rig by using the "Difference" blend mode on Premiere Pro by "creating colours based on the differences between the values of the source colour and the underlying colour". This creates an eery, grungy look as we can clearly see both the water and the sand reacting to the music as it happens. I took care in making sure the minor waves on the surface of the water were distinguishable by adjusting the contrast, highlights and shadows of the water rig video.</p>
            <div class="my-6">
                <div class="relative w-full aspect-video rounded-sm overflow-hidden shadow-sm border border-zinc-100">
                    <iframe 
                        src="https://www.youtube.com/embed/I00-s54ftSM"
                        title="Space Platform Theme - Cymatics Demonstration" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">The Red Rocket</h4>
            <p>The piece starts with a solo guitar signal sent to the water rig. This gave me a great opportunity to capture exactly how the water reacts to differences in frequency and sound pressure level - the first four bars are a repeating pattern of strumming guitar that go through four chords with varying strumming strengths, so the differences that different notes and their loudness make are clearly visible.</p>
            <p>The rest of the piece consists of a bass guitar and a synth - the bass guitar is linked to the water rig as well and that gives a view of how different frequency bands effect the water. Higher frequencies tend to create more and faster ripples on the surface, while lower frequencies create more circular, centred, and slower ripples.</p>
            <p>The drone synth is linked to the Chladni plate, which changes shape based on the frequency, which is self-explanatory - the shape changes as the frequency changes throughout the piece.</p>
            <div class="my-6">
                <div class="relative w-full aspect-video rounded-sm overflow-hidden shadow-sm border border-zinc-100">
                    <iframe 
                        src="https://www.youtube.com/embed/B_zKnBlwpeI"
                        title="The Red Rocket - Cymatics Demonstration" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">Chladni Plate Test</h4>
            <p>This is more of a demonstration than a musical piece, and it is meant to showcase the technical capabilities of the rig in a more technical, straightforward way. The first part of the piece consists of singular sine waves in the resonant frequencies of the plate, and we go through these to test how the transitions between frequencies work. On the second part of the test, we test what happens when instead of one frequency, two frequencies are sent to the plate at once, creating a chord. The rig falls short here, partly because the previous frequencies have caused most of the sand to fall over so there isn't much material to react, but also because the patterns become too complicated to be observed without a more accurate rig.</p>
            <div class="my-6">
                <div class="relative w-full aspect-video rounded-sm overflow-hidden shadow-sm border border-zinc-100">
                    <iframe 
                        src="https://www.youtube.com/embed/R-vN-4wfGY0"
                        title="Chladni Plate Test - Cymatics Demonstration" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">Bass + Water</h4>
            <p>This video is another demonstration, created out of curiosity as I wanted to observe what would happen when a live sound source was sent to the water rig instead of computer-generated sounds. I repeat several themes throughout the video in order to compare the reactions of the water to see if the results are random or if specific notes and/actions on the guitar have specific, exact translations on the water.</p>
            <div class="my-6">
                <div class="relative w-full aspect-video rounded-sm overflow-hidden shadow-sm border border-zinc-100">
                    <iframe 
                        src="https://www.youtube.com/embed/-PdnTSi45vY"
                        title="Bass + Water - Cymatics Demonstration" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
            <p>Below is a comparison of two instances of playing the same note, at around the same strength, the same amount of time after the note is first triggered.</p>
            <div class="my-4">
                <img 
                    src="${import.meta.env.BASE_URL}/images/projects/cymatics/cymatics-6.avif"
                    alt="" 
                    class="w-full rounded-sm shadow-sm border border-zinc-100"
                />
            </div>
            <p>Although the general rule is that waves start from the middle and go outwards, the exact patterns and shapes seem to either be so sensitive that the things that make the difference aren't visible/audible to a casual observer, or there seems to be a randomness to the patterns that happen.</p>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">water waves</h4>
            <p>After seeing how intricate the surface of the water could get following my other videos, I wanted to record this extreme close-up of the water specifically to capture how the surface deals with different types of signals - single frequencies, multiple frequencies, low and high notes, melodies, etc.</p>
            <div class="my-6">
                <div class="relative w-full aspect-video rounded-sm overflow-hidden shadow-sm border border-zinc-100">
                    <iframe 
                        src="https://www.youtube.com/embed/ke7wLneR-CY"
                        title="water waves - Cymatics Demonstration" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
            <p>This video was recorded with 50 frames per second in 1080p (but exported in 4K) in order to capture the movement of the waves better. Most of the piece includes slowed down videos in order to give a better look at the motion of the waves.</p>
            <p>The lighting techniques I mentioned in the introduction proved useful here as they helped me find the best way to light the surface in a way that would show the camera the most detail.</p>
            <p>The water caused the white light to refract and created colourful light streaks in several sections of the surface, which was an unexpected but welcome addition to the video.</p>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">Castlefield</h4>
            <p><i>Castlefield</i> takes the concept used for <i>water waves</i> and combines it with a complete musical piece. The exact techniques are used, this time to record the reactions of the water to the bass guitar track of the music. Intercut are clips of the water reacting to the bass drum, which again gives an insight on how opposite ends of the frequency spectrum effect the water in completely different ways.</p>
            <div class="my-6">
                <div class="relative w-full aspect-video rounded-sm overflow-hidden shadow-sm border border-zinc-100">
                    <iframe 
                        src="https://www.youtube.com/embed/GcRJtygvKlc"
                        title="Castlefield - Cymatics Demonstration" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">2 piano pieces</h4>
            <p><i>2 piano pieces</i> is exactly what its title suggests - it's a recording of the reaction of the water rig to two piano pieces, recorded in succession. This one provided a result that was surprising to me, as I expected a similar result to the more intricate, detailed water waves of <i>Castlefield</i> and <i>water waves</i> - what actually happened was tiny but dense waves, concentrated at the centre of the plate, seemingly only responding to the SPL of the notes/sound instead of the frequencies.</p>
            <div class="my-6">
                <div class="relative w-full aspect-video rounded-sm overflow-hidden shadow-sm border border-zinc-100">
                    <iframe 
                        src="https://www.youtube.com/embed/IkLGbewdxmE"
                        title="2 piano pieces - Cymatics Demonstration" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
            <p>My regret with <i>2 piano pieces</i> is not having recorded it in 50 fps, because even though the resolution would be in 1080p, it would be much easier to observe and analyse the quick but small waves on the surface by slowing down the video. This is still possible, but doesn't work as well due to the video only being in 25 frames per second, therefore resulting in motion blur.</p>
            <h4 class="text-lg font-semibold mb-1 text-sky-600">REFLECTION</h4>
            <p>I set out to use cymatics creatively, as an instrument, and throughout the project, mostly through experimentation, I've made various observations.</p>
            <p>The main thing is that choosing the right cymatics concept for different purposes is key to getting the most effective visualisation. While Chladni plates are perhaps the easiest observed presentation, they aren't fit for use for complex signals such as fast melodies or intricate instrumentations. Liquid cymatics, on the other hand, doesn't produce very easily observable patterns, but reacts very well and quickly to intricate signals and sounds.</p>
            <p>I will use the knowledge I've gained through my work for my personal projects in the future, hopefully by improving upon itself using the experience I now have. Having a medium that lets me combine my audio work directly with a visualisation element opens up potential audiovisual practice opportunities.</p>
            <hr class="border-sky-400 my-6" />
            <section class="references text-sm leading-relaxed">
                <h4 class="text-lg font-semibold mb-1">REFERENCES</h4>
                
                <p class="mb-3 ml-4 -indent-4 text-zinc-500">
                    Breuer, D. and Kirton-Wingate, J. (2016) <i>Creative projects: Cymatics</i>, Creative Project Space: Undergraduate Works From Goldsmiths Computing. Available at: <a href="https://www.doc.gold.ac.uk/creativeprojects/index.php/work/cymatics/" class="text-sky-600 hover:underline break-all">https://www.doc.gold.ac.uk/creativeprojects/index.php/work/cymatics/</a> (Accessed: 09 May 2024).
                </p>
                
                <p class="mb-3 ml-4 -indent-4 text-zinc-500">
                    Smithsonian. (2012, December 17) <i>Chladni Plates</i>. The Science Teaching Collection. Available at: <a href="https://americanhistory.si.edu/science/chladni.htm" class="text-sky-600 hover:underline break-all">https://americanhistory.si.edu/science/chladni.htm</a>.
                </p>
                
                <p class="mb-3 ml-4 -indent-4 text-zinc-500">
                    Kelemen, G. (2007) <i>Evolution</i> [YouTube]. Available at: <a href="https://www.youtube.com/watch?v=CDtfXWXvK_c&t=202s" class="text-sky-600 hover:underline break-all">www.youtube.com/watch?v=CDtfXWXvK_c&t=202s</a> (Accessed: 09 May 2024).
                </p>
                
                <p class="mb-3 ml-4 -indent-4 text-zinc-500">
                    Lauterwasser, A. (2007) <i>Water sound images: The creative music of the universe</i>. Epping, N.H, Edinburgh: MACROmedia; Floris distributor.
                </p>
            </section>
        `,
		category: ["Audiovisual", "Sound Design"],
		image: "/umutyelbasi/images/projects/cymatics/cymatics-6.avif",
		link: "#",
        dates: "February-September 2024",
        client: "Master of Science in Sound Design and Audiovisual Practice - Finishing Project"
	},
    {
		title: "Heartbeat & Piano - Sonic Art Performance",
		desc: "In this sonic art performance, I taped a stethoscope to my chest to amplify my heartbeats as the rhythmic foundation for a live piano piece. By processing this biological pulse into a musical clock, I explored the intimate intersection of human physiology and live instrumentation.",
        longDesc: `
            <p>In this performance, there is a stethescope taped onto my chest and a microphone attached at the end of the stethescope’s tube, which both amplifies and outputs the sound of my heart beats, and triggers specific sounds based on how strong my heart beats are at any point.</p>
            <p>The pieces I chose to perform are from Ludovico Einaudi's <i>[extra elements]</i> album, one of my favourites.</p>
            <h4 class="text-xl font-semibold mb-1 text-sky-600">CRITICAL COMMENTARY</h4>
            <h5 class="text-lg font-semibold mb-1 text-sky-600">Research & Inspiration</h5>
            <p>With very little experience in sonic arts performance, the first step of my process was to search for inspiration. By a stroke of luck, one of the first performances I found was André Borges’s “INSIDE-OUT”, part of the University of Brighton’s 2011 Performance and Visual Arts Degree Show.</p>
            <p>In his performance, Borges uses a stethoscope as a microphone to capture the sounds of his heart, having been influenced by John Cage’s experiences at the Harvard University anechoic chamber, where Cage realised he could hear his blood circulation and nervous system in the completely silent atmosphere of the room. (Borges, 2023) I have been inside the University of Salford anechoic chamber as part of my studies and I have also experienced this, but the significance of my case is that I have a heart condition which causes me to have palpitations and an irregular heartbeat.</p>
            <p>At any given moment, my heart can start beating strongly, not necessarily faster but strong enough for me to feel its movement and shake me if I’m supposed to be standing/sitting still. It also has an irregular beat, which is somewhat under control but still audible from time to time. Considering these, I thought Borges’s “INSIDE-OUT” would be a great starting point for my own Sonic Art Performance project.</p>
            <h5 class="text-lg font-semibold mb-1 text-sky-600">Building the Microphone</h5>
            <p>The initial plan was to build a stethoscope microphone using electret microphones, which turned out to be the wrong approach. After failing to make multiple iterations of similar plans work, I then decided to base my design on that of Anand Bashkar from his 2012 journal article, <i>“A simple electronic stethoscope for recording and playback of heart sounds”</i>, where he uses a pre-made computer microphone with its own 3.5mm jack cable already attached. (Bhaskar, 2012) After taking apart the outer shell, I was left with a bendable metal pole and a working microphone at the end of it.</p>
            <p>I also bought a stethoscope, the listening prongs of which I cut to have a straight tube. I then superglued the open end of the straight tube to the microphone’s surrounding case. I ran this through a TRS to TRRS converter which proved to be unreliable, after which I turned to using the audio interface feature of my Zoom H4n Pro sound recorder. I plugged in the microphone to its external mic input, and the recorder into my computer using a USB A to USB Mini A cable. This turned the stethoscope into a contact microphone, which I could then tape onto my chest and pick up my heartbeat.</p>
            <h5 class="text-lg font-semibold mb-1 text-sky-600">Max Patch</h5>
            <p>I was deliberating ways of getting the heartbeat to trigger actions within Max, and after trying to do this via the pitch or frequency of the heartbeats, I decided on basing it on the volume of the beats. The signal had to be boosted to output a useable audio level, so from the “adc~” object, which “outputs one or more signals (one per outlet) with audio from hardware input devices,” according to its Max MSP reference documentation, is connected to a <i>gain~</i> slider which is also connected to another gain­~ slider. Both being turned up results in a heartbeat that’s audible when connected to an output.</p>
            <figure class="flex-1">
                <img 
                    src="${import.meta.env.BASE_URL}/images/projects/heartbeat-piano/heartbeat-piano-1.png"
                    alt="Figure 1 - Microphone input and gain chain" 
                    class="w-full rounded-sm" 
                /> 
                <figcaption class="text-sm text-zinc-500 mt-4 italic">Figure 1 - Microphone input and gain chain</figcaption>
            </figure>
            <p>The Scaled Output of the second slider is connected to two things – an <i>ezdac~</i> object to route the signal to the selected output, and a <i>meter~</i> object to quantify the level of its signal, which is in turn connected to a number object to use as values for any object it might be connected to (in this case this was <i>select</i> objects, which will be mentioned later). The result of this was shown in decimal points, to the thousandths, so in order to get a more specific number to use to trigger buttons, this was multiplied by 10 and the multiplication was connected to an integer object to show a single number with no decimals – this is then used to choose between 1 and 7 on the switch object that it’s connected to.</p>
            <figure class="flex-1">
                <img 
                    src="${import.meta.env.BASE_URL}/images/projects/heartbeat-piano/heartbeat-piano-2.png"
                    alt="Figure 1 - Microphone input and gain chain" 
                    class="w-full rounded-sm" 
                /> 
                <figcaption class="text-sm text-zinc-500 mt-4 italic">Figure 2 - Audio samples connected to triggerable buttons</figcaption>
            </figure>
            <p>The switch is connected to 7 buttons, each of which trigger 7 different <i>playlist</i> objects with sound effects loaded. These sound effects are arctic-based as the musical part of the performance, which will be discussed later, consists of Ludovico Einaudi’s piano album, Extra Elements. One of the songs is called “Elegy for the Arctic”, which is the reason behind the selection of sounds.</p>
            <h5 class="text-lg font-semibold mb-1 text-sky-600">Triggered Sounds</h5>
            <ul class="list-disc list-outside ml-5 space-y-2 mb-6">
                <li>Ice in water (duplicated for two values)</li>
                <li>Arctic winds (duplicated for two values)</li>
                <li>Seal noises (duplicated for two values)</li>
                <li>Birds chirping near water</li>
                <li>Mechanical sounds in water near the shore</li>
            </ul>
            <p>The duplication of certain sounds is done so that there is continuity, and the values they are assigned to are the most repeated values based on the tests I did. A previous version of the system was made with seven different sounds but was too incomprehensible to work as intended.</p>
            <h5 class="text-lg font-semibold mb-1 text-sky-600">Piano</h5>
            <p>There was always an awareness of another element being needed to support the heartbeat and triggered sounds, but it wasn’t clear what it would be.</p>
            <p>The piece had started with a personal basis, my heart condition, and it was only natural that it would be completed with another personal element – the piano. I have been playing the piano since I was four years old and I had never paid attention to my heartbeats while playing, so this was an easy decision.</p>
            <p>In theory, the piano would be a separate audio source which wouldn’t affect the heartbeat going into the Max patch at all – however, this proved to be an optimistic theory as during the performance the piano was clearly picked up by the stethoscope microphone, which resulted in some unpredictable (but welcome) results where the output signal was a mix of both the heart beat and a distorted version of the piano, the distortion being a result of the nature of the microphone.</p>
            <h5 class="text-lg font-semibold mb-1 text-sky-600">Reflection</h5>
            <p>Through my research and preparation, I’ve learned about microphone circuits, electronics, and Max MSP. I discovered contact microphones and digital stethoscopes, the uses of which can range from digitising heart beats to performance art.</p>
            <p>Although the performance didn’t fully go as planned technically, I believe the message wasn’t disrupted, and a successful connection between the music and heartbeats was made.</p>
            <h4 class="text-md font-semibold mt-6 mb-1 text-sky-600">References</h4>
            <p>Borges, A. (2023) Inside-out, Inside-Out. Available at: <a href="https://www.saxcretino.com/p/inside-out-booklet.html" target="_blank" class="text-sky-600 hover:underline">https://www.saxcretino.com/p/inside-out-booklet.html</a> (Accessed: 21 January 2024).</p>
            <p>Bhaskar, A. (2012) ‘A simple electronic stethoscope for recording and playback of heart sounds’, Advances in Physiology Education, 36(4), pp. 360–362. doi:10.1152/advan.00073.2012.</p>
        `,
		category: ["Sound Design", "Music Production"],
		image: "/umutyelbasi/images/projects/heartbeat-piano/heartbeat-piano-thumbnail.png",
		link: "#",
        dates: "January-March 2024",
        client: "Master of Science in Sound Design and Audiovisual Practice - Finishing Project"
	},
    {
		title: "Shock Radio Awards 2023 - Live Sound Mix",
		desc: "I recorded multitrack live performances for four bands at The Old Abbey Taphouse and performed full mixing and mastering for Step Ladder Records.",
        longDesc: `
            <p>I was tasked with setting up presenter and audience microphones for the 19th Annual Shock Radio Awards, the awards show of the University of Salford's student radio station, Shock Radio.</p>
            <p>I mixed the sound for the entirety of the 1,5-hour show, which was broadcast live on YouTube, which included pre-recorded bits and incidental music in addition to live speech.</p>
            <p>I also won the award for "Best Breakfast Show" for my show Gunaydin Salford ("Good morning Salford" in Turkish) after hosting it for three years.</p>
            <p>The video recording of the whole event can be found below.</p>
            <div class="relative w-full aspect-video rounded-sm overflow-hidden shadow-sm border border-zinc-100">
                <iframe 
                    src="https://www.youtube.com/embed/nvW1dzn-tFQ&t=705s" 
                    title="The 19th Annual Shock Radio Awards (2023)" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    class="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
            <figure class="flex-1">
                <img 
                    src="${import.meta.env.BASE_URL}/images/projects/shock-awards/shock-awards-1.jpg"
                    alt="Figure 1 - Microphone input and gain chain" 
                    class="w-full rounded-sm" 
                /> 
                <figcaption class="text-sm text-zinc-500 mt-4 italic">Accepting the award for "Best Breakfast Show" for "Gunaydin Salford", a weekly show I produced for three years during my BSc at the University of Salford. I focused on playing Turkish songs with a new overall theme every week.</figcaption>
            </figure>
        `,
		category: ["Live Sound"],
		image: "/umutyelbasi/images/projects/shock-awards/shock-awards-1.jpg",
		link: "#",
        dates: "May 2023",
        client: "Shock Radio (https://www.shockradio.co.uk)"
	},
];