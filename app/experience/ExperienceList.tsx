"use client";

import { useEffect, useState } from "react";
import { experiences } from "../data/content";

const internshipTasks = [
  {
    number: "01",
    heading: "Task 1",
    title: "To-Do List Application",
    description:
      "To-Do List Application is a simple and practical Python console application developed as Task 1 during my Decode Labs Internship. This application allows users to add tasks, store them permanently using file handling, and view previously saved tasks through a clean and user-friendly command-line interface.",
    repository:
      "https://github.com/Nouman-Irfan/Decodelabs-Task-1-Muhammad-Nouman.git",
  },
  {
    number: "02",
    heading: "Task 2",
    title: "Expense Tracker",
    description:
      "Expense Tracker is a simple and practical Python console application developed as Task 2 during my Decode Labs Internship. This application allows users to add expenses, view expense history, and generate a useful expense summary including total expenses, average expense, highest expense, and highest expense category.",
    repository:
      "https://github.com/Nouman-Irfan/Decodelabs-Task-2-Muhammad-Nouman.git",
  },
  {
    number: "03",
    heading: "Task 3",
    title: "Secure Random Password Generator",
    description:
      "Secure Random Password Generator is a Python command-line application developed as Task 3 during my Decode Labs Internship. This project generates strong and complex passwords using Python’s secure secrets module. It also checks password strength, validates user input, and stores generated password history with date and time.",
    repository:
      "https://github.com/Nouman-Irfan/Decodelabs-Task-3-Muhammad-Nouman.git",
  },
];

export function ExperienceList() {
  const [tasksOpen, setTasksOpen] = useState(false);

  useEffect(() => {
    if (!tasksOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTasksOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [tasksOpen]);

  return (
    <>
      <section className="section experience-section">
        <div className="wrap experience-list">
          {experiences.map((item, index) => {
            const isDecodeLabs = item.company === "DecodeLabs";

            return (
              <article className="experience-card" key={item.company}>
                <div className="experience-rail">
                  <span>0{index + 1}</span>
                  <i />
                </div>

                <div className="experience-main">
                  <div className="experience-heading">
                    <div>
                      <span className="eyebrow">{item.type}</span>
                      <h2>{item.role}</h2>
                      <h3>{item.company}</h3>
                    </div>

                    <div className="duration-badge">
                      <small>Duration</small>
                      <strong>{item.duration}</strong>
                      {item.issued && <span>{item.issued}</span>}
                    </div>
                  </div>

                  <p className="experience-description">{item.description}</p>

                  <div className="experience-columns">
                    <div>
                      <h4>Key experience</h4>
                      <ul>
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      <div className="tags">
                        {item.skills.map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>

                    {item.certificatePdf ? (
                      <a
                        className="experience-certificate"
                        href={item.certificatePdf}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={item.certificate}
                          alt={item.mediaAlt}
                          loading="lazy"
                        />
                        {item.mediaLabel && <span>{item.mediaLabel}</span>}
                      </a>
                    ) : (
                      <div className="experience-certificate experience-logo">
                        <img
                          src={item.certificate}
                          alt={item.mediaAlt}
                          loading="lazy"
                        />
                        {item.mediaLabel && <span>{item.mediaLabel}</span>}
                      </div>
                    )}
                  </div>

                  {isDecodeLabs && (
                    <button
                      className="internship-tasks-trigger"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded={tasksOpen}
                      onClick={() => setTasksOpen(true)}
                    >
                      <span>Tap to see internship tasks</span>
                      <b aria-hidden="true">↗</b>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {tasksOpen && (
        <div
          className="internship-tasks-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setTasksOpen(false);
          }}
        >
          <section
            className="internship-tasks-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="internship-tasks-title"
          >
            <button
              className="internship-tasks-close"
              type="button"
              aria-label="Close internship tasks"
              onClick={() => setTasksOpen(false)}
              autoFocus
            >
              ×
            </button>

            <header className="internship-tasks-head">
              <span className="eyebrow">DecodeLabs Internship</span>
              <h2 id="internship-tasks-title">Internship Tasks</h2>
              <p>
                Three practical Python projects developed during my Decode Labs
                internship.
              </p>
            </header>

            <div className="internship-task-grid">
              {internshipTasks.map((task) => (
                <article className="internship-task-card" key={task.heading}>
                  <div className="internship-task-top">
                    <span>{task.number}</span>
                    <small>{task.heading}</small>
                  </div>
                  <h3>{task.title}</h3>
                  <h4>Project Overview</h4>
                  <p>{task.description}</p>
                  <a href={task.repository} target="_blank" rel="noreferrer">
                    View GitHub repository <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
