import { ProjectConfig } from '../types';

export const PROJECTS_CONFIG: ProjectConfig[] = [
  {
    repo: 'Deep-Neural-Network-Inverse-Design-of-Integrated-Photonic-Power-Splitters',
    title: 'Deep Neural Network - Photonic Power Splitters',
    description: 'Deep learning-based inverse design of integrated photonic power splitters using neural networks. Given a target spectral response, the neural network generates optimized hole patterns for photonic integrated circuits.',
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'NumPy', 'Lumerical FDTD'],
  },
  {
    repo: 'EIE2111',
    title: 'EIE2111 - C++ Programming',
    description: 'Introduction to C++ Programming course materials. Covers fundamental programming concepts including syntax, object-oriented programming, functions, and modular programming through hands-on labs.',
    techStack: ['C++', 'C#', 'Visual Studio'],
  },
  {
    repo: 'EIE3106-project',
    title: 'EIE3106 - Embedded Systems & Robotics',
    description: 'Embedded systems programming and robotics using microcontroller-based robot cars. Features IR remote control, line tracking sensors, ultrasound obstacle avoidance, and motor control.',
    techStack: ['C', 'Embedded C', 'STM32', 'IR Control', 'Ultrasound'],
  },
  {
    repo: 'EIE3320-java',
    title: 'EIE3320 - Java Programming',
    description: 'Object-oriented programming using Java. Covers classes, objects, inheritance, polymorphism, abstract classes, interfaces, collections, exception handling, and GUI programming.',
    techStack: ['Java', 'OOP', 'AWT/Swing', 'Collections'],
  },
  {
    repo: 'EIE3373-money',
    title: 'EIE3373 - Microcontroller Systems (AVR)',
    description: 'Microcontroller systems using AVR family (ATmega328P/Arduino Uno). Covers GPIO programming, timer/counter operations, interrupts, UART, ADC, and PWM.',
    techStack: ['C', 'AVR', 'ATmega328P', 'Arduino', 'Embedded Systems'],
  },
];
