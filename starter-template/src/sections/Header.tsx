"use client";
import Button from "@/components/Button";
import { FC, useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();

  useEffect(() => {
    // we want to trigger our animation whenever the isOpen changes
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
      ]);
    }
  }, [isOpen , topLineAnimate , topLineScope , bottomLineAnimate , bottomLineScope]);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="container !max-w-full">
        <div className="flex justify-between h-20 items-center">
          {/* for the logo */}
          <div>
            <a href="/">
              <span className="text-xl font-bold uppercase text-black">
                Subh
              </span>
            </a>
          </div>
          {/* for the nav content */}
          <div className="flex items-center gap-4">
            <div className="border border-stone-400 size-11 rounded-full inline-flex justify-center items-center bg-stone-200" onClick={() => {
              setIsOpen(!isOpen)
            }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  ref={topLineScope}
                  x="3"
                  y="7"
                  width="18"
                  height="2"
                  fill="currentColor"
                  style={{
                    transformOrigin: "12px 8px",
                    // transform : "translateY(4px) rotate(45deg)",
                  }}
                />
                <motion.rect
                  ref={bottomLineScope}
                  x="3"
                  y="15"
                  width="18"
                  height="2"
                  fill="currentColor"
                  style={{
                    transformOrigin: "12px 16px",
                    // transform : "translateY(-4px) rotate(-45deg)",
                  }}
                />
              </svg>
            </div>
            <Button
              variant="primary"
              className="hidden md:inline-flex items-center"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
