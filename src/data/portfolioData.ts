// src/data/portfolioData.ts

export interface Socials {
  github: string;
  linkedin: string;
  email: string;
}

export interface Education {
  school: string;
  major: string;
  grade: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  headline: string;
  tagline: string;
  bio: string;
  location: string;
  avatar: string;
  education: Education;
  socials: Socials;
  status: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  logo: string;
  color: string;
  borderColor: string;
}

export interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  emoji: string;
  image: string;
  color: string;
  borderColor: string;
  accentColor: string;
  featured: boolean;
  links: {
    github: string;
    live: string;
    video?: string;
  };
  codeSnippet: CodeSnippet;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  items: SkillItem[];
}

export interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Raffael Aditya Al Fachry',
  initials: 'RA',
  headline: 'Frontend Developer & Software Engineering Enthusiast',
  tagline: 'Building premium digital experiences from Tangerang 🇮🇩',
  bio: "I'm a Grade XII Software Engineering student at SMK Negeri 4 Tangerang with a passion for crafting clean, high-performance web experiences. I thrive on building interactive components, real-time control panels, and elegant database systems.",
  location: 'Tangerang, Indonesia',
  avatar: '/img/pp3.jpeg',
  education: {
    school: 'SMK Negeri 4 Tangerang',
    major: 'Software Engineering',
    grade: 'Grade XII',
  },
  socials: {
    github: 'https://github.com/paellajaa/my-portfolio.git',
    linkedin: 'https://linkedin.com/in/raffaeladitya',
    email: 'raffael@email.com',
  },
  status: 'Open to opportunities',
};

export const stats: Stat[] = [
  { label: 'Repos Built', value: '14' },
  { label: 'Technologies', value: '8' },
  { label: 'Internships', value: '1' },
  { label: 'Commits (YTD)', value: '342' },
];

export const internships: Internship[] = [
  {
    id: 'intern-1',
    role: 'Creative Team Intern',
    company: 'GadingPro',
    period: '2025 — Present',
    description:
      'Designing modern UI components, contributing to digital campaigns, and collaborating closely with developers to translate client requirements into responsive front-end experiences.',
    highlights: ['UI/UX Design', 'Tailwind Components', 'Vite/React Templates', 'Asset Design'],
    logo: '🚀',
    color: 'from-violet-500/10 to-indigo-500/10',
    borderColor: 'border-violet-500/20',
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'BIBLIOX',
    subtitle: 'Laravel Digital Library',
    description:
      'A full-featured library database system built on Laravel. Supports hierarchical book cataloging, user role-based permissions, real-time transaction logs, and advanced search indexing.',
    tech: ['Laravel', 'MySQL', 'PHP', 'Tailwind CSS', 'Alpine.js'],
    emoji: '📚',
    image: '/img/bibliox.png',
    color: 'from-orange-500/10 to-red-500/10',
    borderColor: 'border-orange-500/20',
    accentColor: '#f97316',
    featured: true,
    links: { github: 'https://github.com/paellajaa/my-portfolio.git', live: '#' },
    codeSnippet: {
      filename: 'BookController.php',
      language: 'php',
      code: `<?php

namespace App\\Http\\Controllers;

use App\\Models\\Book;
use Illuminate\\Http\\Request;

class BookController extends Controller
{
    /**
     * Display a listing of library books with search filters.
     */
    public function index(Request $request)
    {
        $query = Book::with(['author', 'category']);

        if ($request->has('search')) {
            $search = $request->get('search');
            $query->where('title', 'like', "%{$search}%")
                  ->orWhereHas('author', function ($q) use ($search) {
                      $q->where('name', 'like', "%{$search}%");
                  });
        }

        return view('books.index', [
            'books' => $query->paginate(12),
            'filters' => $request->only('search')
        ]);
    }
}`
    }
  },
  {
    id: 'proj-2',
    name: 'Di Catet',
    subtitle: 'Task & Note Manager',
    description:
      'An intuitive note-taking and task tracker application. Features rich text editing, categorization, deadline notifications, and offline sync using browser local storage.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage'],
    emoji: '📝',
    image: '/img/dicatet.png',
    color: 'from-blue-500/10 to-indigo-500/10',
    borderColor: 'border-blue-500/20',
    accentColor: '#3b82f6',
    featured: true,
    links: { github: 'https://github.com/paellajaa/my-portfolio.git', live: '#' },
    codeSnippet: {
      filename: 'NoteEditor.tsx',
      language: 'typescript',
      code: `import React, { useState } from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
}

export const NoteEditor: React.FC = () => {
  const [note, setNote] = useState<Note>({ id: '', title: '', content: '' });

  const handleSave = () => {
    if (note.title.trim()) {
      const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
      localStorage.setItem('notes', JSON.stringify([...savedNotes, note]));
      alert('Note saved successfully!');
    }
  };

  return (
    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
      <input
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={e => setNote({ ...note, title: e.target.value })}
        className="w-full bg-zinc-950 border border-zinc-800 p-2 text-white mb-2"
      />
      <textarea
        placeholder="Start writing..."
        value={note.content}
        onChange={e => setNote({ ...note, content: e.target.value })}
        className="w-full h-32 bg-zinc-950 border border-zinc-800 p-2 text-white"
      />
      <button onClick={handleSave} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
        Save Note
      </button>
    </div>
  );
};`
    }
  },
  {
    id: 'proj-3',
    name: 'Vantage Point',
    subtitle: 'Data Analytics Dashboard',
    description:
      'A dashboard for sales tracking and user behavior analytics. Connects to REST APIs to render interactive graphs, metrics tables, and exportable weekly reports.',
    tech: ['React', 'Chart.js', 'Tailwind CSS', 'REST API'],
    emoji: '📊',
    image: '/img/vantage.png',
    color: 'from-cyan-500/10 to-teal-500/10',
    borderColor: 'border-cyan-500/20',
    accentColor: '#06b6d4',
    featured: true,
    links: { github: 'https://github.com/paellajaa/my-portfolio.git', live: '#' },
    codeSnippet: {
      filename: 'TelemetryService.ts',
      language: 'typescript',
      code: `export interface TelemetryData {
  views: number;
  clicks: number;
  bounceRate: number;
}

export class TelemetryService {
  private static endpoint = 'https://api.vantage.point/v1/metrics';

  public static async fetchMetrics(): Promise<TelemetryData> {
    try {
      const response = await fetch(this.endpoint);
      if (!response.ok) throw new Error('Failed to fetch telemetry data');
      return await response.json();
    } catch (error) {
      console.error(error);
      return { views: 0, clicks: 0, bounceRate: 0 };
    }
  }
}`
    }
  },
  {
    id: 'proj-4',
    name: 'Wedding Ditto & Rizka',
    subtitle: 'Interactive RSVP Portal',
    description:
      'A beautiful, mobile-first invitation page created for Ditto and Rizka. Supports digital RSVP forms, guestbook comments, photo galleries, and elegant background music.',
    tech: ['Vue.js', 'Tailwind CSS', 'Firebase DB', 'Vite'],
    emoji: '💍',
    image: '/img/wedding-ditto.png',
    color: 'from-rose-500/10 to-pink-500/10',
    borderColor: 'border-rose-500/20',
    accentColor: '#ec4899',
    featured: true,
    links: { github: 'https://github.com/paellajaa/my-portfolio.git', live: '#', video: 'https://youtu.be/hCXEzGH2Kd0' },
    codeSnippet: {
      filename: 'RsvpForm.vue',
      language: 'javascript',
      code: `<template>
  <div class="rsvp-card p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
    <h3 class="text-white font-bold text-lg mb-4 text-center">RSVP Confirmation</h3>
    <form @submit.prevent="submitRsvp" class="space-y-3">
      <input v-model="name" placeholder="Your Name" class="w-full p-2 bg-zinc-950 border border-zinc-800 text-white" required />
      <select v-model="attendance" class="w-full p-2 bg-zinc-950 border border-zinc-800 text-white">
        <option value="yes">Will Attend</option>
        <option value="no">Unable to Attend</option>
      </select>
      <button type="submit" class="w-full py-2 bg-rose-600 text-white font-bold rounded">Submit RSVP</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { name: '', attendance: 'yes' };
  },
  methods: {
    submitRsvp() {
      // Post to Firebase real-time database
      console.log('Submitted RSVP:', this.name, this.attendance);
      alert('Thank you for RSVPing!');
    }
  }
}
</script>`
    }
  }
];

export const skills: SkillGroup[] = [
  {
    category: 'Frontend Development',
    icon: '⚡',
    color: 'from-yellow-400 to-orange-400',
    items: [
      { name: 'React (TSX / JS)', level: 90 },
      { name: 'Vue.js', level: 75 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 82 },
      { name: 'HTML5 / CSS3 / ES6', level: 94 }
    ],
  },
  {
    category: 'Backend & Data',
    icon: '🛠️',
    color: 'from-blue-400 to-indigo-400',
    items: [
      { name: 'Laravel (PHP)', level: 80 },
      { name: 'MySQL', level: 84 },
      { name: 'RESTful API Design', level: 88 },
      { name: 'Node.js (Express)', level: 68 },
      { name: 'WebSocket (IoT)', level: 75 }
    ],
  },
  {
    category: 'Design & Workflows',
    icon: '🎨',
    color: 'from-pink-400 to-purple-400',
    items: [
      { name: 'Canva', level: 90 },
      { name: 'CapCut', level: 85 },
      { name: 'After Effects', level: 80 },
      { name: 'Figma', level: 88 }
    ],
  },
];

export const techStack: TechItem[] = [
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'Tailwind CSS', icon: '🌊', color: '#06b6d4' },
  { name: 'Vue.js', icon: '💚', color: '#42b883' },
  { name: 'Laravel', icon: '🔴', color: '#ff2d20' },
  { name: 'MySQL', icon: '🗄️', color: '#4479a1' },
  { name: 'Figma', icon: '🎨', color: '#f24e1e' },
  { name: 'AI Tools', icon: '🤖', color: '#a78bfa' },
];
