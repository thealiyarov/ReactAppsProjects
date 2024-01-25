import React, { useEffect, useState } from "react";

function ScrollBarIndicator() {
  const [scroll, setScroll] = useState(0);

  function scrollFn() {
    const containerScrl = document.querySelector("#container_scroll");
    const scrollTopp = containerScrl.scrollTop;
    const height = containerScrl.scrollHeight - containerScrl.clientHeight;
    const finalScroll = (scrollTopp / height) * 100;
    setScroll(finalScroll);
  }

  return (
    <div
      id="container_scroll"
      className=" w-[100%] overflow-auto h-[100vh] "
      onScroll={scrollFn}
    >
      <div className="main bg-[#161a1d] h-[15px] sticky z-1 top-0 ">
        <div
          style={{ width: `${scroll}%`, backgroundColor: "red" }}
          className=" h-[15px]"
        ></div>
      </div>
      <div className="div-text text text-[25px] px-[15px] py-[10px]  ">
        <h1>United State</h1>

        <p className="">
          The United States of America (USA or U.S.A.), commonly known as the
          United States (US or U.S.) or America, is a country primarily located
          in North America. The third-largest country in the world by land and
          total area,[c] the U.S. consists of 50 states, a federal district,
          five major unincorporated territories, nine Minor Outlying Islands[i]
          and includes 326 Indian reservations. It shares land borders with
          Canada to its north and with Mexico to its south and has maritime
          borders with several other countries.[j] With a population of over 334
          million,[k] it is the most populous country in the Americas and the
          third-most populous in the world. The national capital of the United
          States is Washington, D.C., and its most populous city and principal
          financial center is New York City. Ancestors of America's indigenous
          peoples migrated across the Bering land bridge more than 12,000 years
          ago. Beginning in 1607, British colonization led to the establishment
          of the Thirteen Colonies in what is now the Eastern United States.
          They clashed with the British Crown over taxation and political
          representation, which led to the American Revolution and the ensuing
          Revolutionary War. The United States declared independence on July 4,
          1776, and went on to become the first country founded on Enlightenment
          principles of unalienable natural rights, consent of the governed, and
          republicanism. Following a series of treaties, conflicts, and
          acquisitions, the United States expanded across North America. As more
          states were admitted, sectional division over slavery led to the
          secession of the Confederate States of America, which fought the
          remaining states of the Union during the American Civil War (1861–65).
          With the Union's victory and preservation, slavery was abolished
          nationally, but relations between different races remained
          problematic. Industrialization during the late 19th and early 20th
          centuries led to rapid economic development but also socioeconomic
          disparities that prompted calls for reforms. By 1900, the United
          States had established itself as a great power, becoming the world's
          largest economy. After Japan's attack on Pearl Harbor in December
          1941, the U.S. entered World War II on the side of the Allies. The
          aftermath of the war left the U.S. and the Soviet Union as the world's
          two superpowers and led to the Cold War, during which both countries
          engaged in a struggle for ideological dominance and international
          influence, avoided direct military conflict, and competed in the Space
          Race, which culminated with the United States landing the first humans
          on the Moon in 1969. Following the Soviet Union's collapse and the end
          of the Cold War in 1991, it emerged as the world's sole superpower.
          The United States national government is a federal presidential
          constitutional republic and liberal democracy with three separate
          branches of government: legislative, executive, and judicial; this
          governmental structure is designed to maintain a system of checks and
          balances among the branches. It has a bicameral national legislature
          composed of the House of Representatives, a lower house based on
          population; and the Senate, an upper house based on equal
          representation for each state. Many policy issues are decentralized at
          a state or local level, and these can vary by jurisdiction. However,
          they must conform with, and are subordinate to, the Constitution.
          Americans generally value liberty, equality under the law,
          individualism, and limited government. A developed country, the United
          States has the highest median income per capita of any non-microstate
          and possesses by far the largest amount of wealth of any country. The
          American economy accounts for over a quarter of global GDP and is the
          largest nominally. It ranks among the highest in the world in
          international measures of human development, income, wealth, economic
          competitiveness, productivity, innovation, human rights, and
          education. The United States is a founding member of the United
          Nations, the World Bank, the International Monetary Fund, the
          Organization of American States, NATO and WHO and is a permanent
          member of the United Nations Security Council. It wields considerable
          global influence as the world's foremost political, cultural,
          economic, military, and scientific power. Etymology Further
          information: Names of the United States and Demonyms for the United
          States The first documentary evidence of the phrase "United States of
          America" dates back to a letter from January 2, 1776, written by
          Stephen Moylan, a Continental Army aide to General George Washington,
          to Joseph Reed, Washington's aide-de-camp. Moylan expressed his desire
          to go "with full and ample powers from the United States of America to
          Spain" to seek assistance in the Revolutionary War effort.[26][27] The
          first known publication of the phrase "United States of America" was
          in an anonymous essay in The Virginia Gazette newspaper in
          Williamsburg, on April 6, 1776.[28] By June 1776, the name "United
          States of America" appeared in drafts of the Articles of Confederation
          and Perpetual Union, authored by John Dickinson, a Founding Father
          from the Province of Pennsylvania,[29][30] and in the Declaration of
          Independence, written primarily by Thomas Jefferson and adopted by the
          Second Continental Congress in Philadelphia, on July 4, 1776.[29][31]
        </p>
      </div>
    </div>
  );
}

export default ScrollBarIndicator;
