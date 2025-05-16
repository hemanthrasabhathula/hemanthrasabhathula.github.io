import { Mail, MapPin } from "lucide-react";
import { ClassNameProps } from "../lib/types";
import { cn } from "../lib/utils";
import React from "react";
import { CONTACT, CONTACT_ID, EMAIL, LOCATION } from "../lib/constants";

const Contact = React.memo(({ className }: ClassNameProps) => {
  const title = CONTACT;

  const contactItems = [
    {
      icon: <MapPin className="size-5" />,
      title: "Location",
      value: LOCATION,
    },
    {
      icon: <Mail className="size-5" />,
      title: "Email",
      value: EMAIL,
    },
  ];

  return (
    <>
      <section
        className={cn(
          "overflow-hidden flex flex-col justify-center p-4 py-12",
          className
        )}
        id={CONTACT_ID}
      >
        <div className="pb-8">
          <div className="relative mb-5 pb-5">
            <h2 className="font-[Raleway] text-3xl font-bold text-section-title-h2">
              {title}
            </h2>
            <div className="absolute w-12 h-[3px] bg-highlight-blue bottom-0 left-0"></div>
          </div>
          <p className="text-[1rem]">
            Thanks for stopping by{" "}
            <span>
              <lord-icon
                src="https://cdn.lordicon.com/stjagiwe.json"
                trigger="loop"
                delay="1000"
                stroke="bold"
                style={{
                  verticalAlign: "middle",
                  width: "1.7rem",
                  height: "1.7rem",
                }}
              />
            </span>
            {" . "}
            If you have any questions or just want to chat about development,
            feel free to reach out to me. You can find my contact information on
            this website or simply send me an email. Looking forward to hearing
            from you!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 p-2" data-aos="fade-up">
          <div
            className="w-full lg:w-3/7 flex flex-col justify-center items-start p-4 self-start
            bg-section-primary shadow-[0_0_24px_0_rgba(0,0,0,0.12)] rounded-[12px] gap-4 
          "
          >
            <div className="grid grid-cols-[auto_auto] grid-rows-[auto_auto] gap-4 items-center">
              {contactItems.map((item, index) => (
                <React.Fragment key={index}>
                  {/* Icon */}
                  <div
                    className="flex justify-center items-center  text-contact-icon bg-contact-icon-bg w-10 h-10 rounded-[50%]
    hover:bg-contact-icon-bg-hover hover:text-contact-icon-bg  transition duration-300 ease-in-out cursor-pointer"
                  >
                    {item.icon}
                  </div>
                  {/* Title and Value */}
                  <div className="flex flex-col gap-1 items-start">
                    <h4 className="font-[raleway] text-xl font-bold">
                      {item.title}
                    </h4>
                    <p>{item.value}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="flex flex-col w-full items-start p-2">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lee's+Summit,+MO+()&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="border-0 w-full h-80 rounded-[5px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
export default Contact;
