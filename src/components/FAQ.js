import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

const BannerLanding = (props) => (
    <section id="faq">
            <Accordion>
            <h1>FAQs</h1>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ When is the deadline to apply?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>The deadline is Nov 15th at 11:59 PM!</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ What is <b>Delta</b>Hacks?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p><b>Delta</b>Hacks is McMaster's annual student hackathon. This time, <b>Delta</b>Hacks will be a 24-hour hackathon taking place from Jan 26-27th, 2019. We hope to inspire students to hack for positive changes that align with their passions - whether it's environment, health, inequality, education, etc. And hence the name “delta” - as “Δ” stands for change.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ But I don't have an idea, what should I do?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Don't worry! We will walk you through how to generate great ideas at the beginning of <b>Delta</b>Hacks.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ Who can participate?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>All university students! (And high school students over 18.) If you're someone who is willing to learn and wants to take a shot at changing the world, no matter what your field is, you definitely belong here.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ How much does it cost?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Nothing! Zero! The event is absolutely free for all participants. We will provide you with the venue, food, Wi-Fi, etc. You just need to show up.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ How about teams?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>If you haven't found a team prior to the event, you'll definitely find one at the team building event after Opening Ceremonies. Everyone accepted will also be invited to the <b>Delta</b>Hacks' Slack prior to the hackathon in order to discuss ideas.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ What should I bring?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>You will definitely need your laptop, phone, their chargers, as well as a valid student or government ID. Feel free to also bring along a sleeping bag, and we recommend some comfortable clothes.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ But I don't have an idea, what should I do?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Don't worry! We will walk you through how to generate great ideas at the beginning of <b>Delta</b>Hacks.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ I don't live near McMaster, are there travel reimbursements?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>We will send buses based on the number of accepted applicants from a particular area! For people traveling from elsewhere, although we would love to have you, we won't be able to provide individual travel reimbursement.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ What is the code of conduct and what are the rules regarding privacy and data sharing?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>We strictly abide by <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH's Code of Conduct</a> and <a href="https://mlh.io/privacy">Privacy Policy</a>, and all participants must agree to abide by it. Please note that you may receive pre and post-event informational e-mails and occasional messages about hackathons from MLH as per the MLH Privacy Policy.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ Who owns the intellectual property produced at DeltaHacks V?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>By default, all intellectual property created at <b>Delta</b>Hacks V belongs to the student team, and the team agrees that any member of the team has the right to continue to develop the ideas and software either individually or as a group. Corporate Challengers may require a different disposition of intellectual property, but only if they have prior approval in writing from <b>Delta</b>Hacks V for the agreement to which they are asking students to agree. Where there are commercial possibilities for any project, it is recommended that the parties involved agree in writing on the sharing of the financial returns.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ 404 : Question Not Found</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Shoot us an <a href="mailto:hello@deltahacks.com">email</a> or a <a href="https://www.facebook.com/thedeltahacks">Facebook message</a>!</p>
                </AccordionItemBody>
            </AccordionItem>
            </Accordion>
    </section>
)

export default BannerLanding
