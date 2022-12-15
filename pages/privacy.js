import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import bgimage from "../public/tools.jpg";

export default function Privacy() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Privacy Center | Vernacular Academy</title>
      </Head>

      <Header />

      <main>
        <section>
          <div className="relative">
            <div className="absolute w-full h-full overflow-hidden">
              <Image
                src={bgimage}
                alt="Background image"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="w-full h-96 lg:h-full p-6 pt-52 lg:py-20 relative bg-gradient-to-bl from-brand-900/60 via-brand-600/70 to-brand-800/75">
              <h1 className="text-gray-50 text-4xl lg:text-7xl font-serif font-semibold  lg:leading-tight">
                Privacy
                <br />
                And Data <br />
                Protection
              </h1>
            </div>
          </div>
        </section>

        <section>
          <div className="lg:py-10 p-6">
            <h2 className="text-brand-800 text-3xl lg:text-6xl font-serif lg:font-extralight lg:leading-tight">
              Privacy Center
            </h2>
            <p className="text-gray-700 lg:text-lg font-light mt-4 w-full">
              All informations collected by Hair By Devon Sean are
              exclusively to be able to provide the necessary Service and for
              security reasons and record keeping, and they most be provided by
              you upon registration. Hair By Devon Sean uses the data to
              deliver the Service and maintain a customer relationship,
              including processing refund claims should we chose to. Google
              Analytics is also been used to collect statistics on users&apos;
              interaction with the Service to improve the Service and related
              in-app functionality.
              <br />
              <br />
              The Service may create aggregate usage reports for advertisers and
              partners. This allows our advertisers to advertise more
              effectively and allows our users to receive advertisements that
              are relevant to their needs. We (Hair By Devon Sean) would
              never share individual personal information with anyone, so no
              advertiser will ever know that a specific user clicked on that
              advertiser&apos;s advertisement.
              <br />
              <br />
              Hair By Devon Sean uses the above-described information to
              tailor the Service to suit user needs and help our advertisers
              better understand our audience demographics. Informations about
              individual users are never shared with any third party.
              <br />
              <br />
              The transmission of information via the internet is not completely
              secure. Although we will take steps to protect your personal
              information, we cannot guarantee the security of your personal
              information or other data transmitted to the Vernacular Academy
              LLC Platform; any transmission is at your own risk. Once we have
              received your personal information, we will use organizational and
              technical safeguards to try to prevent unauthorized access. Please
              also note that the Hair By Devon Sean Platform may contains
              links to third party websites, which are not governed by this
              Privacy Policy, and Hair By Devon Sean is not responsible for
              the collection, use or disclosure of Personal Information by such
              third party websites. When you click on such a link, you will
              leave our service and go to another site. During this process,
              another entity may collect personal information from you.
              <br />
              <br />
              We have implemented administrative, technical and physical
              measures to protect your personal information from unauthorised
              access and against unlawful processing, accidental loss,
              destruction and damage. We restrict access to your personal
              information to Hair By Devon Sean personnel and authorized
              service providers who require access to fulfill their job
              requirements.
              <br />
              <br />
              We will keep your information where we have an ongoing legitimate
              business need to do so (for example, while you hold an account
              with us and for a reasonable period of time thereafter, or to
              enable us to meet our legal, tax or accounting obligations). We
              may retain certain data as necessary to prevent fraud or future
              abuse, or for legitimate business purposes, such as analysis of
              aggregated, non-personal information, or account recovery, or if
              required or permitted by law. All retained personal information
              will remain subject to the terms of this Privacy Policy. If you
              request that your name be removed from our databases, it may not
              be possible to completely delete all your personal information due
              to technological and legal constraints.
              <br />
              <br />
              We may request certain personal information for the purposes of
              verifying the identity of the individual seeking access to their
              personal information records and may restrict access to personal
              information as required or permitted by applicable law or legal
              process.
              <br />
              <br />
              You agree that Hair By Devon Sean reserves the right to
              disclose any information we have as required by law and when we
              believe that disclosure is necessary to protect our rights and/or
              comply with a judicial proceeding, court order, or legal process.
              <br />
              <br />
              Should you use the Service to purchase Products from third party
              Merchants as further described in the terms of service, the
              collection of data by such third party Merchant is described in
              the relevant privacy policy of such Merchant and Vernacular
              Academy LLC would not be held responsible or accountable for this.
              <br />
              <br />
              Hair By Devon Sean may inform of any changes or updates to
              this Privacy Policy, through its website or in- app notifications.
              We encourage you to periodically review this page for the latest
              information on our privacy practices.
              <br />
              <br />
              For more informations or questions you may contact us via our
              support.
              <br />
              <br />
              By using any part of the Service, you acknowledge and agree to the
              processing of your personal data, under the terms and conditions
              set out in this Privacy Policy.
              <br />
              <br />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
