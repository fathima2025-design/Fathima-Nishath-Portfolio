import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(const FathimaPortfolio());
}

class FathimaPortfolio extends StatelessWidget {
  const FathimaPortfolio({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fathima Nishath | Portfolio',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        textTheme: GoogleFonts.poppinsTextTheme(),
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  // --- Keys and Controllers for Scrolling ---
  final ScrollController _scrollController = ScrollController();
  final GlobalKey _experienceKey = GlobalKey();
  final GlobalKey _projectsKey = GlobalKey();
  final GlobalKey _skillsKey = GlobalKey();

  void _scrollToSection(GlobalKey key) {
    Scrollable.ensureVisible(
      key.currentContext!,
      duration: const Duration(milliseconds: 800),
      curve: Curves.easeInOut,
    );
  }

  void _launchURL(String urlString) async {
    final Uri url = Uri.parse(urlString);
    if (!await launchUrl(url)) {
      throw Exception('Could not launch $url');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        surfaceTintColor: Colors.transparent,
        title: Text("FATHIMA NISHATH", 
          style: GoogleFonts.poppins(fontWeight: FontWeight.bold, letterSpacing: 1.5, fontSize: 18)),
        actions: [
          _navButton("Experience", _experienceKey),
          _navButton("Projects", _projectsKey),
          _navButton("Skills", _skillsKey),
          const SizedBox(width: 15),
        ],
        backgroundColor: Colors.white,
        elevation: 0,
        //sticky: true, // Optional: for web feel
      ),
      body: SingleChildScrollView(
        controller: _scrollController,
        child: Column(
          children: [
            _buildHeroSection(),

            // --- EXPERIENCE SECTION ---
            _buildSectionTitle("Professional Experience", _experienceKey),
            _buildExperienceTile(
              "Kullooo Innovative Solutions",
              "Flutter Full Stack Developer | July 2025 – Present",
              [
                "Developed cross-platform apps using Flutter & .NET (C#).",
                "Integrated 10+ RESTful APIs with structured error handling.",
                "Optimized SQL Server databases & query performance.",
                "Managed complex state using Provider & Riverpod."
              ],
            ),

            const SizedBox(height: 50),

            // --- PROJECTS SECTION ---
            Container(
              key: _projectsKey,
              color: const Color(0xFFF8F9FA),
              padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 20),
              child: Column(
                children: [
                  _buildSectionTitle("Key Projects"),
                  const SizedBox(height: 40),
                  Wrap(
                    spacing: 30,
                    runSpacing: 30,
                    alignment: WrapAlignment.center,
                    children: [
                      _buildProjectCard(
                        "Face Attendance System",
                        "AI-powered system using TensorFlow Lite for real-time detection. Reduced manual effort by 70%.",
                        Icons.face_unlock_outlined,
                      ),
                      _buildProjectCard(
                        "Voice-Based Grocery App",
                        "Flutter web app with Speech-to-Text (STT) integration for hands-free product search.",
                        Icons.mic_none_rounded,
                      ),
                      _buildProjectCard(
                        "Queue Management App",
                        "Digital queue system with Firebase Push Notifications and SMS integration.",
                        Icons.hourglass_empty_rounded,
                      ),
                    ],
                  ),
                ],
              ),
            ),

            // --- SKILLS SECTION ---
            _buildSkillsSection(_skillsKey),

            _buildFooter(),
          ],
        ),
      ),
    );
  }

  // --- Helper Widgets ---

  Widget _navButton(String text, GlobalKey key) {
    return TextButton(
      onPressed: () => _scrollToSection(key), 
      child: Text(text, style: const TextStyle(color: Colors.black87, fontWeight: FontWeight.w500))
    );
  }

  Widget _buildHeroSection() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 120, horizontal: 20),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [Colors.white, Colors.blue.withOpacity(0.05)],
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
        ),
      ),
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            decoration: BoxDecoration(
              color: Colors.blue.withOpacity(0.1),
              borderRadius: BorderRadius.circular(20),
            ),
            child: const Text("Flutter Full Stack Developer", 
              style: TextStyle(color: Colors.blue, fontWeight: FontWeight.bold, fontSize: 12)),
          ),
          const SizedBox(height: 25),
          Text("Building Scalable Mobile\n& Web Applications",
              textAlign: TextAlign.center,
              style: GoogleFonts.poppins(fontSize: 45, fontWeight: FontWeight.w800, height: 1.2, color: Colors.black87)),
          const SizedBox(height: 20),
          const SizedBox(
            width: 700,
            child: Text(
              "Full Stack Developer with experience in Flutter, .NET Core, and AI integration. Passionate about building efficient, real-time applications with seamless user experiences.",
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 18, color: Colors.black54),
            ),
          ),
          const SizedBox(height: 40),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              ElevatedButton(
                onPressed: () => _launchURL("https://wa.me/919842140477"),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.black,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(horizontal: 35, vertical: 22),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                ),
                child: const Text("CONNECT ON WHATSAPP"),
              ),
              const SizedBox(width: 15),
              OutlinedButton(
                onPressed: () => _launchURL("mailto:danishahamed2023@gmail.com"),
                style: OutlinedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(horizontal: 35, vertical: 22),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                ),
                child: const Text("SEND EMAIL"),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildSectionTitle(String title, [GlobalKey? key]) {
    return Padding(
      key: key,
      padding: const EdgeInsets.only(top: 60, bottom: 30),
      child: Text(title, style: const TextStyle(fontSize: 30, fontWeight: FontWeight.bold)),
    );
  }

  Widget _buildExperienceTile(String company, String subtitle, List<String> points) {
    return Container(
      width: 850,
      margin: const EdgeInsets.symmetric(horizontal: 20),
      padding: const EdgeInsets.all(35),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(15),
        border: Border.all(color: Colors.grey[200]!),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(company, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
              const Icon(Icons.verified, color: Colors.blue),
            ],
          ),
          Text(subtitle, style: const TextStyle(color: Colors.blue, fontWeight: FontWeight.w600)),
          const Divider(height: 40),
          ...points.map((point) => Padding(
            padding: const EdgeInsets.only(bottom: 10),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text("• ", style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)),
                Expanded(child: Text(point, style: const TextStyle(fontSize: 15, color: Colors.black87))),
              ],
            ),
          )),
        ],
      ),
    );
  }

  Widget _buildProjectCard(String title, String desc, IconData icon) {
    return Container(
      width: 320,
      padding: const EdgeInsets.all(30),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.04), blurRadius: 20, offset: const Offset(0, 10))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          CircleAvatar(
            backgroundColor: Colors.blue.withOpacity(0.1),
            child: Icon(icon, color: Colors.blue),
          ),
          const SizedBox(height: 20),
          Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
          const SizedBox(height: 12),
          Text(desc, style: const TextStyle(fontSize: 14, color: Colors.black54, height: 1.5)),
        ],
      ),
    );
  }

  Widget _buildSkillsSection(GlobalKey key) {
    return Container(
      key: key,
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 20),
      color: const Color(0xFF1A1A1A),
      child: Column(
        children: [
          const Text("Technical Expertise", style: TextStyle(fontSize: 28, color: Colors.white, fontWeight: FontWeight.bold)),
          const SizedBox(height: 40),
          Wrap(
            spacing: 12,
            runSpacing: 12,
            alignment: WrapAlignment.center,
            children: [
              _skillChip("Flutter"), _skillChip("Dart"), _skillChip("C#"), _skillChip(".NET Core"),
              _skillChip("SQL Server"), _skillChip("REST APIs"), _skillChip("TensorFlow Lite"),
              _skillChip("Firebase"), _skillChip("Git"), _skillChip("Postman"),
            ],
          ),
        ],
      ),
    );
  }

  Widget _skillChip(String label) {
    return Chip(
      label: Text(label),
      backgroundColor: Colors.white10,
      labelStyle: const TextStyle(color: Colors.black, fontSize: 13),
      side: BorderSide.none,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    );
  }

  Widget _buildFooter() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 50),
      child: Column(
        children: [
          const Text("Get in touch", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20)),
          const SizedBox(height: 10),
          const Text("Tamil Nadu, India | +91 9842140477", style: TextStyle(color: Colors.black54)),
          const SizedBox(height: 30),
          const Text("© 2026 Fathima Nishath.", style: TextStyle(fontSize: 12, color: Colors.grey)),
        ],
      ),
    );
  }
}