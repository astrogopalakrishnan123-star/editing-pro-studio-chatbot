'use client';

import Link from 'next/link';
import { Clock, Zap, Globe, Settings } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold text-white">Global Clock</span>
          </div>
          <Link
            href="/clock"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Open Clock
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Global Time Zone<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Clock Display
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Track time across multiple time zones in real-time with beautiful analog and digital displays
          </p>
          <Link
            href="/clock"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Launch Clock 🚀
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-colors">
            <Globe className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">30+ Time Zones</h3>
            <p className="text-slate-400">
              Supports major cities and regions across all continents. Add or remove time zones instantly.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-colors">
            <Zap className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Real-Time Updates</h3>
            <p className="text-slate-400">
              Clocks update every second with analog clock faces and digital time display.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-colors">
            <Settings className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Fully Customizable</h3>
            <p className="text-slate-400">
              Select which time zones to display. Toggle between any 30+ cities and regions.
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-20 bg-slate-800 border border-slate-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '✓ Analog clock displays with moving hands',
              '✓ Digital 12/24 hour time format',
              '✓ Current date and day display',
              '✓ Dark modern UI with gradient design',
              '✓ Mobile responsive layout',
              '✓ Real-time second-by-second updates',
              '✓ Easy timezone selection/deselection',
              '✓ Support for daylight saving time',
              '✓ All major world cities included',
              '✓ Beautiful smooth animations',
              '✓ No external clock library needed',
              '✓ Built with React & Next.js',
            ].map((feature, index) => (
              <p key={index} className="text-slate-300 text-lg">
                {feature}
              </p>
            ))}
          </div>
        </div>

        {/* Supported Timezones */}
        <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Supported Time Zones</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold text-blue-400 mb-3">North America</h3>
              <ul className="text-slate-300 space-y-2">
                <li>🗽 New York</li>
                <li>🌴 Los Angeles</li>
                <li>🌊 Chicago</li>
                <li>⛰️ Denver</li>
                <li>🍁 Toronto</li>
                <li>🌮 Mexico City</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-3">Europe & Africa</h3>
              <ul className="text-slate-300 space-y-2">
                <li>🇬🇧 London</li>
                <li>🇫🇷 Paris</li>
                <li>🇩🇪 Berlin</li>
                <li>🇹🇷 Istanbul</li>
                <li>🇪🇬 Cairo</li>
                <li>🇿🇦 Johannesburg</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-3">Asia</h3>
              <ul className="text-slate-300 space-y-2">
                <li>🇦🇪 Dubai</li>
                <li>🇮🇳 New Delhi</li>
                <li>🇨🇳 Shanghai</li>
                <li>🇯🇵 Tokyo</li>
                <li>🇰🇷 Seoul</li>
                <li>🇹🇭 Bangkok</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-3">Oceania & South America</h3>
              <ul className="text-slate-300 space-y-2">
                <li>🇦🇺 Sydney</li>
                <li>🇳🇿 Auckland</li>
                <li>🇧🇷 São Paulo</li>
                <li>🇦🇷 Buenos Aires</li>
                <li>+ 10+ more</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
          <p>⏰ Global Time Zone Clock • Built with React & Next.js</p>
          <p className="mt-2 text-sm">Displays real-time clock for any city worldwide</p>
        </div>
      </footer>
    </div>
  );
}
