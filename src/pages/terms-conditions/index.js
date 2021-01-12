import React from 'react';
import { H1, H3 } from 'components';
import './styles.scss';

const Heading = ({ children }) => (
  <div className="pt2">
    <H3 className="">{children}</H3>
    <div className="my2 yellow-bar" />
  </div>
);

const TermsConditionsPage = () => (
  <main className="TermsConditionsPage">
    {/* HERO */}

    <section className="hero bg-green">
      <div className="hero-body">
        <div className="container ">
          <H1 className="py3">Terms & Conditions</H1>
        </div>
      </div>
    </section>

    {/* Intro  */}
    <article className="container section py2">
      <section>
        <p>
          <span className="bold">May 16, 2018:</span> Thank you for visiting the Overture website.
          Please read the Terms and Conditions carefully before using this website.
        </p>
      </section>

      {/* Use of site */}
      <section>
        <Heading>
          <span className="bold pr2">1</span>Terms & Conditions of Use of Site{' '}
        </Heading>
        <p>
          This website (the “Site”) is provided to you subject to your agreement to and compliance
          with the terms and conditions of use set forth below (the “Terms and Conditions”). By
          visiting or otherwise using this Site, including without limitation, accessing, using,
          and/or downloading messages, information, data, text, video, software or images, or other
          content from this Site (collectively the “Content”), or sending messages, information,
          data, text, video, software or images, or other Content to the Site, you agree on your own
          behalf, and on behalf of any entity on whose behalf you may act, to accept and abide by
          the Terms and Conditions for each use of and each visit to this Site. If you do not agree
          to abide by these Terms and Conditions, please do not use this Site.
        </p>
        <p>
          OICR has the right, in its sole discretion, to add to, remove, modify or otherwise change
          the Terms and Conditions, in whole or in part, at any time. Please check the Terms and
          Conditions frequently by checking the date of “Last Updated” at the top of this document
          to see if there have been any changes that may affect your decision on whether or not to
          use the Site. If any term, condition or any change thereto is not acceptable to you, you
          must discontinue your use of this Site immediately. Your continued use of this Site after
          any such changes are posted will constitute acceptance of those changes. These Terms and
          Conditions apply exclusively to your use of this Site and do not alter the terms or
          conditions of any other agreement you may have with OICR.
        </p>
        <p>
          OICR may, at any time without notice or liability, and for any reason whatsoever,
          terminate, change, suspend or discontinue any aspect of this Site, including (i) changing
          the availability of, restricting access to, or imposing limits on any or all features or
          services on, or links to, the Site; (ii) adding, removing or changing any fees or charges
          for use of the Site or any features thereof; and (iii) removing, adding, modifying or
          otherwise changing any Content on this Site. OICR reserves the right, in its sole
          discretion, to correct any errors or omissions in any portion of this Site at any time
          without notice, but confirms that it has no duty to do so.
        </p>
      </section>

      {/* website privacy statement */}
      <section>
        <Heading>
          <span className="bold pr2">2</span>Website Privacy Statement
        </Heading>
        <p>
          The <a href="/privacy">Website Privacy Statement </a> applies to your use of this website.
          Please ensure you have read and agree with the{' '}
          <a href="/privacy">Website Privacy Statement</a>. By visiting and using this Site, you are
          consenting to the collection, use and disclosure of your Personal Information while
          visiting the Site.
        </p>
      </section>

      {/* Proprietary Rights */}
      {/* website privacy statement */}
      <section>
        <Heading>
          <span className="bold pr2">3</span>Proprietary Rights
        </Heading>
        <p>
          The Site Content is protected by copyright, trademark, and other applicable intellectual
          property and proprietary rights laws, and is owned, controlled, and/or licensed by OICR
          and/or its affiliates, or other third-party content providers. Any unauthorized copying,
          redistribution, reproduction or modification of the Content by any person may be a
          violation of trademark and/or copyright laws and could subject such person to legal
          action. Any use of any Content, in whole or in part, without prior written authorization
          of OICR is strictly prohibited.
        </p>
        <p>
          You agree to comply with all applicable intellectual property and proprietary rights laws
          in your use of this Site and to prevent any unauthorized copying of the Content.
        </p>
      </section>

      {/* Restrictions  */}
      <section>
        <Heading>
          <span className="bold pr2">4</span>Restrictions on Site Use
        </Heading>
        <p>
          Subject to the Terms and Conditions, you are granted a non-exclusive, non-transferable,
          non-sub-licensable, revocable, limited license to display on your computer, print and
          download and use the content of this Site for informational purposes only and solely for
          your own non-commercial, personal or internal company use provided you retain all
          copyright and other proprietary notices. No other use is permitted.
        </p>
        <p>Prohibited uses include, without limitation:</p>
        <ul>
          <li className="bullet">reselling any Content;</li>
          <li className="bullet">
            including any Content in or with any product that you create or distribute unless the
            copyright attribution accompanies such Content;
          </li>
          <li className="bullet">copying any Content onto your own or any other website;</li>
          <li className="bullet">
            removing any proprietary notices or labels on this Site or the Content provided on this
            Site;
          </li>
          <li className="bullet">
            plagiarizing the Content on this site or otherwise violating or infringing the
            Proprietary Rights of OICR or any third party; or
          </li>
          <li className="bullet">
            using this Site in any manner that could damage, disable, overburden, impair, interfere
            with the security of, negatively affect the functioning of, or otherwise abuse, this
            Site or any services, system resources, accounts, servers, networks, or affiliated or
            linked sites, connected to or accessible through this Site (including without limitation
            uploading, posting or otherwise transmitting on this Site computer viruses, Trojan
            horses, worms or other files or computer programs which are potentially harmful,
            disruptive or destructive or that may impose an unreasonable or disproportionately large
            load on this Site’s infrastructure).
          </li>
        </ul>
        <p>
          In addition, you agree that you are solely responsible for actions and communications
          undertaken or transmitted in the course of your use of this Site, and that you will comply
          with all laws that apply or may apply to your use of or activities on this Site or in
          respect of the Content. OICR will investigate occurrences which may involve violations of
          such laws, and may involve, and co-operate with, law enforcement authorities in
          prosecuting users who are involved in such violations. OICR reserves the right at all
          times to disclose any information regarding your usage of the Site as necessary to satisfy
          any law, regulation or governmental request.
        </p>
      </section>

      {/* Link to Third Party Websites*/}
      <section>
        <Heading>
          <span className="bold pr2">5</span>Links to Third Party Websites
        </Heading>
        <p>
          Certain links on this Site may take you to other websites. All such other websites are
          independent from this Site and OICR provides these links as a convenience only.
        </p>
        <p>
          OICR has no control over, and is not responsible for, the content of any such linked
          pages. OICR makes no representation or warranty regarding, and does not endorse, any
          linked websites, the information appearing thereon or any of the products or services
          described. If you follow these links, you will leave this Site. If you decide to visit any
          linked site, you do so at your own risk and it is your responsibility to take all
          protective measures to guard against viruses and other destructive elements. The terms of
          use and privacy policies applicable to such websites may be different than those
          applicable to this website. OICR may terminate a link at any time.
        </p>
        <p>
          OICR welcomes links to this Site. However, you agree that if you want to link to this
          Site, your website shall not:
        </p>
        <ul>
          <li className="bullet">
            create frames around any part of this Site or use other techniques that alter the visual
            presentation of this Site;
          </li>
          <li className="bullet">
            imply that OICR is endorsing you or any other person, or your or such other person’s
            products or services;
          </li>
          <li className="bullet">
            imply an affiliation between you or any other person, or your or such other person’s
            products or services, and OICR without the prior written consent of OICR;
          </li>
          <li className="bullet">
            misrepresent your relationship or that of any other person with OICR or present false,
            misleading or otherwise damaging information or impressions about OICR or any of its
            products or services; or
          </li>
          <li className="bullet">
            contain materials that may be interpreted as distasteful, harmful, offensive, infringing
            or inaccurate.
          </li>
        </ul>
        <p>
          You acknowledge and agree that OICR reserves the right to request, at any time and in its
          sole discretion, that you remove all links or any particular link to the Site or any other
          OICR website or to a page of the Site or any other OICR website.
        </p>
      </section>

      {/* Disclaimers */}
      <section>
        <Heading>
          <span className="bold pr2">6</span>Disclaimers
        </Heading>
        <p>
          This Site is provided on an “as-is, as available” basis. While OICR believes the Content
          on this Site to be correct, OICR makes no representations or warranties regarding the
          accuracy, completeness or currency of any Content displayed on this Site.
        </p>
        <p>
          This Site is designed for informational purposes and for event registration only. The Site
          does not provide medical advice or professional services, and should not be relied upon as
          such. The information provided on this Site is not intended as a substitute for medical
          professional help or advice, but is to be used only as an aid in understanding current
          medical knowledge. A physician should always be consulted for any health problem or
          question, or medical condition. Use of or reliance on the information displayed on this
          Site is at your own risk.
        </p>
      </section>

      {/* Limitations of Liability */}
      <section>
        <Heading>
          <span className="bold pr2">7</span>Limitations of Liability
        </Heading>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL OICR AND ITS RESPECTIVE
          DIRECTORS, OFFICERS, MEMBERS, AGENTS, EMPLOYEES, REPRESENTATIVES AND LICENSORS
          (COLLECTIVELY THE “OICR PARTIES”) BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL
          OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF
          PROFITS, FAILURE TO REALIZE EXPECTED SAVINGS, INTERRUPTION OF ACTIVITIES, OR ANY OTHER
          PECUNIARY OR ECONOMIC LOSS) ARISING OUT OF THE USE OF OR INABILITY TO USE THIS SITE, EVEN
          IF ANY OF THE PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN ANY EVENT,
          THE PARTIES’ TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION, WHETHER
          IN CONTRACT OR TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, SHALL BE LIMITED TO THE AMOUNT
          ACTUALLY PAID BY YOU TO ACCESS THIS SITE, IF ANY. IN NO EVENT SHALL ANY OICR PARTY BE
          LIABLE FOR DAMAGES OR LOSSES OF ANY KIND ARISING FROM THE USE OF ANY HYPERLINKED WEBSITE.
        </p>
        <p>
          BY USING THE CONTENT, YOU AGREE TO INDEMNIFY OICR AND ITS CONTENT PROVIDERS FROM ANY AND
          ALL LIABILITY, LOSS, INJURY, DAMAGES, COSTS AND EXPENSES (INCLUDING LEGAL FEES AND
          EXPENSES) ARISING FROM YOUR USE OF THE CONTENT.
        </p>
      </section>

      <section>
        <Heading>
          <span className="bold pr2">8</span>General
        </Heading>
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws
          in force in the province of Ontario and the federal laws of Canada applicable therein, and
          any dispute arising hereunder shall be resolved exclusively by the courts in the province
          of Ontario.
        </p>
      </section>
    </article>
  </main>
);

export default TermsConditionsPage;
