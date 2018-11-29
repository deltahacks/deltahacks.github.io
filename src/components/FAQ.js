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
                    <p>The deadline was Sunday, Nov 25th at 11:59 PM. If you missed it, but really want to attend, we're looking for volunteers to help us run the event! Sign up at <a href="/volunteer">deltahacks.com/volunteer</a></p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ When are acceptances/rejections going out?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>We'll be sending out acceptances on a rolling basis. For the most up to date result, check your dashboard at <a href="https://my.deltahacks.com">my.deltahacks.com</a>! If you know someone who's been accepted, but you haven't received word back from us yet, don't worry - we aren't releasing all acceptances at the same time.</p>
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
                    <p>+ I have no programming experience. Can I still attend?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Yes! You will bring a much-needed fresh point of view and ideas that could make your project meaningful.</p>
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
                    <p>+ What's the max team size?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>The maximum number of people per team is 4 - but you can definitely form a team with fewer members than that.</p>
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
                    <p>+ Why do you collect demographic information on your application?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Demographic information has no bearing on your application. All applications are judged solely on merit. The information collected is purely for statistical purposes, and will be used by the DeltaHacks team to improve the hackathon in future years.</p>
                    {/* DeltaHacks team and MLH when we're approved */}
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <p>+ Why do you market DeltaHacks as changing the world?</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>DeltaHacks itself is not changing the world. Our goal is to encourage thinking about meaningful issues and problem solving that will enable <i>you</i> to change the world.</p>
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
