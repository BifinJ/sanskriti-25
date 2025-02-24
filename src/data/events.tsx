import { JSX } from "react";

export interface Events {
  id: number;
  description: string;
  title: string;
  reg_fees: string;
  src: string;
  ctaText: string;
  non_mace_link: string;
  mace_link: "";
  content: () => JSX.Element;
}

export const singleEvents:Events[] = [
  {
    id: 1,
    description: "6K Prize Pool",
    title: "മോഹിനിയാട്ടം",
    reg_fees: "Rs. 150/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://github.com/",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Each participant will be allowed up to 15 minutes including time for preparation, exit etc. (10 minutes for performance and 5 minutes for stage preparation)</li>
          <li>Judgment will be based basically on the qualities like Tal, Technique, Rhythm, Abhinaya or expression, costume, footwork, general impression etc.</li>
          <li>Participants should submit audio as CD/Pendrive/Phone with AUX output to the event coordinators before starting of the event.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 2,
    description: "6K Prize Pool",
    title: "ഭരതനാട്യം",
    reg_fees: "Rs. 150/-",
    src: "/Arang/Individual/bharathanatyam.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Each participant will be allowed up to 15 minutes including time for preparation, exit etc. (10 minutes for performance and 5 minutes for stage preparation)</li>
          <li>Judgment will be based basically on the qualities like Tal, Technique, Rhythm, Abhinaya or expression, costume, footwork, general impression etc.</li>
          <li>Participants should submit audio as CD/Pendrive/Phone with AUX output to the event coordinators before starting of the event.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },

  {
    id: 3,
    description: "1K Prize Pool",
    title: "Extempore - Malayalam",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/extempore_malayalam.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>The extempore should contain Malayalam language only.</li>
          <li>Topic will be given only 5 minutes before the commencement of the competition.</li>
          <li>Maximum time allotted for the performance is 5 minutes.</li>
          <li>Participants will not be allowed to take any paper or material with them during the speech.</li>
          <li>Judgment will be based on content, clear organization, pronunciation, enunciation and diction, stage presence (eye contact, poise, personality).</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 4,
    description: "1K Prize Pool",
    title: "Extempore - English",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/extempore_english.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>The extempore should contain English language only.</li>
          <li>Topic will be given only 5 minutes before the commencement of the competition.</li>
          <li>Maximum time allotted for the performance is 5 minutes.</li>
          <li>Participants will not be allowed to take any paper or material with them during the speech.</li>
          <li>Judgment will be based on content, clear organization, pronunciation, enunciation and diction, stage presence (eye contact, poise, personality).</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 5,
    description: "6K Prize Pool",
    title: "കുച്ചിപ്പുടി",
    reg_fees: "Rs. 150/-",
    src: "/Arang/Individual/kuchipudi.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Each participant will be allowed up to 15 minutes including time for preparation, exit etc. (10 minutes for performance and 5 minutes for stage preparation)</li>
          <li>Judgment will be based basically on the qualities like Tal, Technique, Rhythm, Abhinaya or expression, costume, footwork, general impression etc.</li>
          <li>Participants should submit audio as CD/Pendrive/Phone with AUX output to the event coordinators before the start of the event.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 6,
    description: "1K Prize Pool",
    title: "Light Music",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/light_music.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>The participant can choose a meaningful Malayalam song of about 5 minutes duration.</li>
          <li>The song should not be devotional, choral, or from films.</li>
          <li>Songs that contain offensive mentions of caste, religion, and community or are wholly inappropriate will be rejected.</li>
          <li>Every participant should keep the proper time limit as given above.</li>
          <li>The judgment is based on expression, swaram, thalam, and overall performance.</li>
          <li>Actions or body movements on the stage will not be taken into consideration in judgment.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 7,
    description: "1K Prize Pool",
    title: "Carnatic Music / ശാസ്ത്രീയസംഗീതം",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/shastryasangeedham.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>The item can be presented in either Hindustani or Carnatic style.</li>
          <li>Film songs are not allowed under this item.</li>
          <li>Maximum time allotted for the performance is 10 minutes.</li>
          <li>Sufficient thought and care must be exercised in the choice of raga and composition.</li>
          <li>Judgment will be based on swara, tal, selection of raga, composition, and general impression.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 8,
    description: "1K Prize Pool",
    title: "Monoact",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/Mono_Act.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Time allowed is 5 minutes.</li>
          <li>Judgment will be based on qualities like ability to act, clarity of language, literary expression, originality, humor, general impression, etc.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 9,
    description: "1K Prize Pool",
    title: "Anchoring",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/anchoring.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Maximum time allotted for the item is 10 minutes.</li>
          <li>You can prefer any language (English or Malayalam) according to your comfort.</li>
          <li>Topic will be given 10 minutes prior.</li>
          <li>Costume and appearance will be considered for judgment.</li>
          <li>You will be judged according to the costume and appearance, body language, fluency and repetition of words or phrases, confidence, and gestures.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 10,
    description: "1K Prize Pool",
    title: "Standup Comedy",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/stand_up_comedy.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>No participant can point out any individual or religion in any way, and any dual-meaning obscene content is strictly not allowed.</li>
          <li>Participants will be judged on the basis of content, fluency, spontaneity, presentation, and sense of humor.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 11,
    description: "1K Prize Pool",
    title: "Western Vocal Solo",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/western_solo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>The competition is common to men and women participants.</li>
          <li>Time allotted for the item is not more than 5 minutes.</li>
          <li>Language of the song shall be only English.</li>
          <li>Judgment will be made on the qualities like composition, rhythm, coordination, and general impression, etc.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 12,
    description: "1K Prize Pool",
    title: "Recitation - English",
    reg_fees: "Rs. 100/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Performance time limit will be 5 minutes.</li>
          <li>Participants are not allowed to refer to any notes or printed materials during the recitation of the memory verse.</li>
          <li>Poems containing language that is offensive, hurtful to any caste, creed, religion, or community, or wholly inappropriate, will be rejected.</li>
          <li>Judgment will be based on clarity of speech, expression of emotion and ideas, rhythm, tone, general impression, etc.</li>
          <li>The decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 13,
    description: "1K Prize Pool",
    title: "Recitation - Malayalam",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/recitation-malayalam.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
       <ul>
        <li>Participation is open for all engineering colleges.</li>
        <li>Performance time limit will be 5 minutes.</li>
        <li>Participants are not allowed to refer to any notes or printed materials during the recitation of the memory verse.</li>
        <li>Poems containing languages that are offensive, hurtful to any caste, creed, religion, or community, or wholly inappropriate, will be rejected.</li>
        <li>Judgment will be based on clarity of speech, expression of emotion and ideas, rhythm, tone, general impression, etc.</li>
        <li>The decision of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
  {
    id: 14,
    description: "1K Prize Pool",
    title: "Mappilappattu",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/drums.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Competition is common for men and women participants.</li>
          <li>Duration: 5 minutes maximum.</li>
          <li>Evaluation will be based on Sruthilayam & rhythm, Bhavam, language & literary clarity.</li>
          <li>Film songs are not allowed for competition.</li>
          <li>Preference is given to traditional Mappila Pattu.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 15,
    description: "1K Prize Pool",
    title: "Drums Solo",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/drums.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>Individual event (no accompanists are allowed).</li>
          <li>Specified instrument for Percussion Western is Drums.</li>
          <li>Performance must be for a maximum of 5 minutes.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 16,
    description: "1K Prize Pool",
    title: "String Solo",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/flute.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>This is a solo event.</li>
          <li>Time Limit: 5 mins, any extensions in time will result in direct disqualification.</li>
          <li>Any stringed instrument shall be used for solo performance.</li>
          <li>Solos of famous songs can be played.</li>
          <li>Original composition shall be encouraged and given more weightage.</li>
          <li>A combination of riffs and solos can be played.</li>
          <li>Distortion is not allowed. No processing foot pedals.</li>
          <li>Judging criteria will be based on solo only.</li>
          <li>Judging Criteria:</li>
          <ul>
            <li>Tempo</li>
            <li>Clarity of Notes</li>
            <li>Difficulty of piece</li>
            <li>Dynamics</li>
          </ul>
          <li>Decision of judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 17,
    description: "1K Prize Pool",
    title: "Flute",
    reg_fees: "Rs. 100/-",
    src: "/Arang/Individual/flute.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open for all engineering colleges.</li>
          <li>This is a solo event.</li>
          <li>Time Limit: 5 minutes. Any extensions in time will result in direct disqualification.</li>
          <li>Solos of famous songs can be played.</li>
          <li>Original compositions shall be encouraged and given more weightage.</li>
          <li>A combination of riffs and solos can be played.</li>
          <li>Judging criteria will be based on the solo performance only:</li>
          <ul>
            <li>Tempo</li>
            <li>Clarity of Notes</li>
            <li>Difficulty of the piece</li>
            <li>Dynamics</li>
          </ul>
          <li>The decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
];


export const groupEvents:Events[] = [
  {
    id: 1,
    description: "6K Prize Pool",
    title: "Group Dance",
    reg_fees: "Rs. 600/-",
    src: "/Arang/Group/group_dance.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Group participants should be a minimum of 6 and a maximum of 12 participants.</li>
          <li>Duration of performance: 3 to 5 minutes. Exceeding the time may lead to disqualification.</li>
          <li>Cinema songs are allowed.</li>
          <li>Use of vulgar, sexually explicit, or violent language and/or lyrics is strictly prohibited.</li>
          <li>Only one participant from a team (lead) needs to register and provide the names of other participants to the event coordinators.</li>
          <li>Judgment is based on rhythm, formation, expression, costumes, make-up, sets, and the overall effect.</li>
          <li>Participants who do not meet the required guidelines will be disqualified.</li>
          <li>The decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 2,
    description: "8K Prize Pool",
    title: "തിരുവാതിര",
    reg_fees: "Rs. 800/-",
    src: "/Arang/Group/thiruvathira.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum number of participants allowed is <strong>10</strong>.</li>
          <li>Each team can have a maximum of <strong>8 dancers</strong> and <strong>2 accompanists</strong> (including singers).</li>
          <li>The team must consist of <strong>only girls</strong>.</li>
          <li>The duration of the dance should not exceed <strong>10 minutes</strong>.</li>
          <li>Judgment will be based on:
              <ul>
                  <li>Rhythm</li>
                  <li>Formation</li>
                  <li>Expression</li>
                  <li>Costumes</li>
                  <li>Make-up</li>
                  <li>Sets</li>
                  <li>Overall effect</li>
              </ul>
          </li>
          <li>The decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },

  {
    id: 3,
    description: "8K Prize Pool",
    title: "ഒപ്പന",
    reg_fees: "Rs. 800/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum number of participants allowed is <strong>10</strong>.</li>
          <li>Each team can have a maximum of <strong>7 dancers</strong> (including the bride) and <strong>3 accompanists</strong> (including singers).</li>
          <li>The team should consist of <strong>only girls</strong>.</li>
          <li>The duration of the dance should not exceed <strong>10 minutes</strong>.</li>
          <li>Judgment will be based on: Rhythm, Formation, Expression, Costumes, Make-up, Sets, Overall effect</li>
          <li>The decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 4,
    description: "6K Prize Pool",
    title: "Group Song",
    reg_fees: "Rs. 600/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Group participants should be a minimum of 6 and a maximum of 12 participants.</li>
          <li>Duration of performance: 3 to 5 minutes. Exceeding the time may lead to disqualification.</li>
          <li>Cinema songs are allowed.</li>
          <li>Use of vulgar, sexually explicit, or violent language and/or lyrics is strictly prohibited.</li>
          <li>Only one participant from a team (lead) needs to register and provide the names of other participants to the event coordinators.</li>
          <li>Judgment is based on rhythm, formation, expression, costumes, make-up, sets, and overall effect.</li>
          <li>Participants who do not meet the required guidelines will be disqualified.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 5,
    description: "8K Prize Pool",
    title: "മാർഗ്ഗംകളി",
    reg_fees: "Rs. 800/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum number of participants is 7, including 1 singer.</li>
          <li>Song and costume should be appropriate for Margamkali.</li>
          <li>No background music is allowed, and the traditional instrument for Margamkali may be used.</li>
          <li>Time allowed is 10 minutes.</li>
          <li>Judgment is based on rhythm, formation, set, costume, and overall effect.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 6,
    description: "6K Prize Pool",
    title: "നടൻപാട്ട്",
    reg_fees: "Rs. 600/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Duration should not exceed 10 minutes (Negative points for exceeding time).</li>
          <li>Maximum 8 participants.</li>
          <li>The tradition of the folk song must be revealed on the stage.</li>
          <li>The song should not contain any offensive, obscene, or disrespectful lyrics.</li>
          <li>Use of karaoke will not be entertained.</li>
          <li>Judgment will be based on rhythm, coordination, instruments, team spirit, outfit, and overall presentation.</li>
          <li>Decisions of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 7,
    description: "6K Prize Pool",
    title: "വഞ്ചിപ്പാട്ട്",
    reg_fees: "Rs. 600/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>A maximum of 10 people can participate.</li>
          <li>Out of 10 people, one will be the &quot;Thaalakkaaran&quot; and one will be the lead singer (&quot;Thalappattu&quot;), while the remaining 8 people will be supporting singers.</li>
          <li>The performance can be in one of the following styles: Veppupattu, Kuttanadan style, or Aranmula style.</li>
          <li>When registering the team, the style in which the song will be presented must be specified in advance.</li>
          <li>Judgment will be based on rhythm, tune, synchronization with the singers, expression, outfit, and overall presentation.</li>
          <li>Decisions of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
  {
    id: 8,
    description: "8K Prize Pool",
    title: "ദഫ് മുട്ട്",
    reg_fees: "Rs. 800/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum number of participants allowed is Ten (10).</li>
          <li>Duration of the event should not be more than 10 minutes.</li>
          <li>The songs used for Duffmuttu should be &quot;Arabi Baith&quot;.</li>
          <li>Judgment will be based on the &quot;Baith&quot;, rhythm, percussion, and overall effect.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
  {
    id: 9,
    description: "8K Prize Pool",
    title: "കോൽക്കളി",
    reg_fees: "Rs. 800/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum number of participants allowed is Twelve (12).</li>
          <li>Duration of the event should not be more than 10 minutes.</li>
          <li>The songs used for Kolkali should be melodious and traditional &quot;Mappilappattu&quot;.</li>
          <li>Judgment will be based on the originality of the song, rhythm, movements (Maithayam), formation, footwork, and overall effect.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
  {
    id: 10,
    description: "6K Prize Pool",
    title: "Mime",
    reg_fees: "Rs. 600/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Mime or Mookabhinayam is acting without words. It is an art that expresses through gestures, postures, and facial expressions. It portrays ideas, themes, or tells a story through physical movements only.</li>
          <li>Maximum number of 8 participants are allowed.</li>
          <li>Maximum time allotted for the performance is five (5) minutes.</li>
          <li>Judgment will be based on qualities like idea, creativity of presentation, use of make-up, costume, music, and general impression.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
        </ul>
      );
    },
  },
  {
    id: 11,
    description: "8K Prize Pool",
    title: "Spoof",
    reg_fees: "Rs. 800/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>Maximum of 12 members are allowed per team.</li>
          <li>Time limit: 10 minutes, empty to empty.</li>
          <li>Props and costumes are allowed.</li>
          <li>Points will be awarded on the basis of overall performance, which includes acting skills, script, dialogue delivery, presentation, and other factors.</li>
          <li>Extra points shall be awarded for costumes.</li>
          <li>Characters can be from any number of movies. Scene elements from other movies can also be included.</li>
          <li>Character portrayal, twists, and humor carry additional weightage.</li>
          <li>Backstage narration (live/recorded) is allowed.</li>
          <li>Background music is permitted.</li>
          <li>Plagiarism of any sort will lead to immediate disqualification. Plagiarism includes skits taken from YouTube or any other sources from the Internet.</li>
          <li>Decision of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
  {
    id: 12,
    description: "4K Prize Pool",
    title: "Sangagaanam(Malayalam)",
    reg_fees: "Rs. 400/-",
    src: "/images/sanskriti-logo.png",
    ctaText: "Register",
    non_mace_link: "https://ui.aceternity.com/templates",
    mace_link: "",
    content: () => {
      return (
        <ul>
          <li>Participation is open to all engineering colleges.</li>
          <li>A total time of 10 minutes will be provided.</li>
          <li>Maximum 7 participants.</li>
          <li>Use of instruments is not permitted.</li>
          <li>Sruthi box can be used.</li>
          <li>All regional languages are allowed.</li>
          <li>Film songs are not allowed.</li>
          <li>Fusion of songs is allowed.</li>
          <li>Judgment will be based on talam, sruthi, layam, overall performance, and team coordination.</li>
          <li>Decisions of the judges will be final and cannot be appealed.</li>
      </ul>
      );
    },
  },
];


export const main_events = [
  {
    event_name: "Arang",
    event_description: "Event description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro delectus minima eos voluptatibus quidem quo quibusdam! Accusamus unde numquam incidunt exercitationem sapiente quo facere illum rem reiciendis sunt, nobis alias ab, omnis ipsum dignissimos, sint vel vero earum. Obcaecati incidunt cumque, sequi quasi corporis iure nostrum error fuga dignissimos molestias delectus nemo quam consequuntur molestiae provident a officia sit. Perferendis vitae, illum iure, unde consectetur blanditiis ipsa maxime optio voluptatum dolorum architecto voluptatibus ratione saepe doloremque explicabo eius asperiores fugit!",
    event_image: "/images/sanskriti-logo.png",
    event_link: "/arang"
  },
  {
    event_name: "Alai",
    event_description: "Event description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro delectus minima eos voluptatibus quidem quo quibusdam! Accusamus unde numquam incidunt exercitationem sapiente quo facere illum rem reiciendis sunt, nobis alias ab, omnis ipsum dignissimos, sint vel vero earum. Obcaecati incidunt cumque, sequi quasi corporis iure nostrum error fuga dignissimos molestias delectus nemo quam consequuntur molestiae provident a officia sit. Perferendis vitae, illum iure, unde consectetur blanditiis ipsa maxime optio voluptatum dolorum architecto voluptatibus ratione saepe doloremque explicabo eius asperiores fugit!",
    event_image: "/images/sanskriti-logo.png",
  },
  {
    event_name: "ProShow",
    event_description: "Event description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro delectus minima eos voluptatibus quidem quo quibusdam! Accusamus unde numquam incidunt exercitationem sapiente quo facere illum rem reiciendis sunt, nobis alias ab, omnis ipsum dignissimos, sint vel vero earum. Obcaecati incidunt cumque, sequi quasi corporis iure nostrum error fuga dignissimos molestias delectus nemo quam consequuntur molestiae provident a officia sit. Perferendis vitae, illum iure, unde consectetur blanditiis ipsa maxime optio voluptatum dolorum architecto voluptatibus ratione saepe doloremque explicabo eius asperiores fugit!",
    event_image: "/images/sanskriti-logo.png",
  },
  {
    event_name: "Jalakam",
    event_description: "Event description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro delectus minima eos voluptatibus quidem quo quibusdam! Accusamus unde numquam incidunt exercitationem sapiente quo facere illum rem reiciendis sunt, nobis alias ab, omnis ipsum dignissimos, sint vel vero earum. Obcaecati incidunt cumque, sequi quasi corporis iure nostrum error fuga dignissimos molestias delectus nemo quam consequuntur molestiae provident a officia sit. Perferendis vitae, illum iure, unde consectetur blanditiis ipsa maxime optio voluptatum dolorum architecto voluptatibus ratione saepe doloremque explicabo eius asperiores fugit!",
    event_image: "/images/sanskriti-logo.png",
  },
  {
    event_name: "Drishyam",
    event_description: "Event description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro delectus minima eos voluptatibus quidem quo quibusdam! Accusamus unde numquam incidunt exercitationem sapiente quo facere illum rem reiciendis sunt, nobis alias ab, omnis ipsum dignissimos, sint vel vero earum. Obcaecati incidunt cumque, sequi quasi corporis iure nostrum error fuga dignissimos molestias delectus nemo quam consequuntur molestiae provident a officia sit. Perferendis vitae, illum iure, unde consectetur blanditiis ipsa maxime optio voluptatum dolorum architecto voluptatibus ratione saepe doloremque explicabo eius asperiores fugit!",
    event_image: "/images/sanskriti-logo.png",
  },
]