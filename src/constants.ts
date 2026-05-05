import { Project, ResearchPaper, TeamMember, BlogPost } from './types';

export const PROJECTS: Project[] = [
  // A. Foundation AI & LLM Systems (1–10)
  {
    id: 'p-1',
    title: 'OmniFusion-V1',
    description: 'Unified multimodal model architecture capable of joint reasoning across text, imagery, and frequency-domain audio signals.',
    category: 'Foundation AI',
    techStack: ['Python', 'PyTorch', 'HuggingFace', 'CUDA'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    specifications: [
      'Throughput: 450 tokens/sec',
      'Context Window: 128k Tokens',
      'Precision: Float16/BFloat16',
      'Latency: < 50ms (Inference)'
    ],
    fullContent: 'OmniFusion-V1 represents a breakthrough in unified neural architecture. Unlike separate models for vision and text, OmniFusion utilizes a shared latent space that allows for true cross-modal reasoning. The model has been verified to identify audio frequencies and map them to visual spectra with 98.4% accuracy.'
  },
  {
    id: 'p-2',
    title: 'RAG-Nexus',
    description: 'Autonomous research agent with dynamic knowledge retrieval and long-term symbolic memory-augmented reasoning.',
    category: 'Foundation AI',
    techStack: ['Python', 'LangChain', 'Pinecone', 'Redis'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    specifications: [
      'Index Size: 1.2B Documents',
      'Retrieval Speed: 15ms',
      'Memory Type: Symbolic Augmented',
      'Agent Loops: Parallel Async'
    ],
    fullContent: 'RAG-Nexus is a state-of-the-art research pipeline that combines the speed of vector search with the precision of symbolic logic. It features an automated self-correction mechanism that recursively audits every retrieved citation before synthesizing the final output.'
  },
  {
    id: 'p-3',
    title: 'VeriGate-AI',
    description: 'Strict verification pipeline for LLM outputs to eliminate hallucinations in high-stakes clinical and legal environments.',
    category: 'Foundation AI',
    techStack: ['Rust', 'Python', 'Constraint Logic'],
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p-4',
    title: 'Bit-Quant-Server',
    description: 'Ultra-low latency inference engine for running multi-billion parameter models on edge devices with limited RAM.',
    category: 'Foundation AI',
    techStack: ['C++', 'TensorRT', 'ONNX'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p-5',
    title: 'Agentic-Core',
    description: 'Multi-agent orchestration framework for solving complex multi-step industrial planning and execution tasks.',
    category: 'Foundation AI',
    techStack: ['Node.js', 'Python', 'Docker'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p-6',
    title: 'Synth-Gen-X',
    description: 'Automated dataset generator creating high-fidelity synthetic training data for domain-specific LLM fine-tuning.',
    category: 'Foundation AI',
    techStack: ['Python', 'GANs', 'Transformers'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p-7',
    title: 'Safe-Shield',
    description: 'Robust alignment system implementing constitutional AI principles for safety-critical user interactions.',
    category: 'Foundation AI',
    techStack: ['Python', 'PyTorch', 'NLP'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p-8',
    title: 'Memory-Stream',
    description: 'Continual learning framework enabling models to update knowledge in real-time without catastrophic forgetting.',
    category: 'Foundation AI',
    techStack: ['Python', 'JAX'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p-9',
    title: 'Symbolic-Neural-Bridge',
    description: 'Hybrid reasoning engine combining the pattern recognition of neural networks with the logic of symbolic AI.',
    category: 'Foundation AI',
    techStack: ['Python', 'Prolog', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p-10',
    title: 'Long-Context-Prime',
    description: 'Sparse transformer architecture optimized for processing multi-million token contexts for large-scale analysis.',
    category: 'Foundation AI',
    techStack: ['Python', 'CUDA', 'FlashAttention'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },

  // B. Advanced Data Science Systems (11–18)
  {
    id: 'p-11',
    title: 'Auto-ML-Flux',
    description: 'End-to-end machine learning pipeline automation with hyper-parameter optimization and model search.',
    category: 'Data Science',
    techStack: ['Python', 'Scikit-learn', 'MLflow'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p-12',
    title: 'Live-Stream-Analytica',
    description: 'Low-latency analytics engine for processing massive real-time data streams for financial and sensor systems.',
    category: 'Data Science',
    techStack: ['Apache Flink', 'Kafka', 'Scala'],
    image: 'https://images.unsplash.com/photo-1518186239124-797d825c7556?auto=format&fit=crop&q=80&w=800'
  },
  { id: 'p-13', title: 'Graph-Intelligence', description: 'Deep geometric learning on large-scale fraud networks for real-time anomaly detection.', category: 'Data Science', techStack: ['PyTorch Geometric', 'Neo4j'], image: 'https://images.unsplash.com/photo-1502139173938-c783a718c66e?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-14', title: 'Causal-Predictor', description: 'Predicting intervention effects through high-dimensional causal graph discovery.', category: 'Data Science', techStack: ['Python', 'DoWhy'], image: 'https://images.unsplash.com/photo-1454165833267-02300a498263?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-15', title: 'Data-Centric-Ops', description: 'Optimization tool for improving dataset quality and integrity before model training.', category: 'Data Science', techStack: ['Python', 'SQL'], image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-16', title: 'Drift-Monitor', description: 'Advanced system for detecting and alerting on model performance degradation in production.', category: 'Data Science', techStack: ['Prometheus', 'Grafana'], image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-17', title: 'Privacy-Synth', description: 'Generative data platform for creating privacy-preserving synthetic replicas of sensitive data.', category: 'Data Science', techStack: ['Python', 'Differential Privacy'], image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-18', title: 'Feature-Store-Prime', description: 'Distributed high-throughput feature management system for enterprise-scale ML teams.', category: 'Data Science', techStack: ['Go', 'Redis', 'Cassandra'], image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800' },

  // C. Quant Finance + AI (19–28)
  { id: 'p-19', title: 'Alpha-Transformer', description: 'Time-series transformer model for high-frequency signal identification and trading.', category: 'Quant Finance', techStack: ['Python', 'PyTorch', 'Pandas'], image: 'https://images.unsplash.com/photo-1611974714024-4696144e04f0?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-20', title: 'Reinforce-Portfolio', description: 'Deep RL agent for optimal asset allocation under changing market volatility regimes.', category: 'Quant Finance', techStack: ['Python', 'TensorFlow', 'Gym'], image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-21', title: 'HFT-Sim-Pro', description: 'Microsecond-accurate market depth simulator for testing latency-sensitive trading strategies.', category: 'Quant Finance', techStack: ['C++', 'FPGA'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-22', title: 'Vol-Deep-Predict', description: 'Volatility forecasting using deep stochastic modeling and recurrent architectures.', category: 'Quant Finance', techStack: ['Python', 'PyTorch'], image: 'https://images.unsplash.com/photo-1535320485706-44d43b91d530?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-23', title: 'Micro-Structure-Net', description: 'Modeling price formation and liquidity dynamics at the limit order book level.', category: 'Quant Finance', techStack: ['Python', 'LOB Data'], image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-24', title: 'Sentiment-Alpha', description: 'NLP-driven alpha generation through real-time global news and social sentiment analysis.', category: 'Quant Finance', techStack: ['Python', 'BERT', 'Kafka'], image: 'https://images.unsplash.com/photo-1512428559083-a45e94e43e4a?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-25', title: 'Fin-Fraud-GNN', description: 'Anomalous transaction detection using graph neural networks across merchant networks.', category: 'Quant Finance', techStack: ['Python', 'PyG'], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-26', title: 'Option-Pricer-Neural', description: 'Neural hedging engine for complex multi-asset derivatives and non-linear options.', category: 'Quant Finance', techStack: ['Python', 'TensorFlow'], image: 'https://images.unsplash.com/photo-1535320485706-44d43b91d530?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-27', title: 'Bayes-Risk-Simulator', description: 'Probabilistic risk modeling using Bayesian neural networks for uncertainty quantification.', category: 'Quant Finance', techStack: ['Python', 'Stan'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-28', title: 'Multi-Bot-Trader', description: 'Competitive multi-agent environment for training self-improving trading behaviors.', category: 'Quant Finance', techStack: ['Python', 'Ray'], image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800' },

  // D. AI Systems + Infrastructure (29–36)
  { id: 'p-29', title: 'Dist-ML-Grid', description: 'Multi-node distributed training infrastructure for large-scale model optimization.', category: 'Infrastructure', techStack: ['Kubernetes', 'NCCL', 'Python'], image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-30', title: 'Inference-Scale-API', description: 'High-throughput model serving platform with dynamic auto-scaling and load balancing.', category: 'Infrastructure', techStack: ['Go', 'GRPC', 'Docker'], image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-31', title: 'CUDA-Opt-Tool', description: 'Deep performance analysis and memory optimization tool for custom CUDA kernels.', category: 'Infrastructure', techStack: ['CUDA', 'C++', 'Python'], image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-32', title: 'Kube-ML-Orchestra', description: 'Kubernetes native operator for managing end-to-end ML lifecycles and deployments.', category: 'Infrastructure', techStack: ['Kubernetes', 'Helm'], image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-33', title: 'Edge-AI-Node', description: 'Low-power inference system for real-time processing on embedded and IoT hardware.', category: 'Infrastructure', techStack: ['C', 'ARM', 'TFLite'], image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-34', title: 'Federated-Sync', description: 'Secure decentralized learning network for training models on distributed private data.', category: 'Infrastructure', techStack: ['Python', 'Cryptography'], image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-35', title: 'Privacy-Pipeline', description: 'End-to-end encrypted ML training pipeline with differential privacy guarantees.', category: 'Infrastructure', techStack: ['Python', 'Opacus'], image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-36', title: 'AI-Observability', description: 'Real-time monitoring and explainability platform for enterprise production AI systems.', category: 'Infrastructure', techStack: ['Python', 'SHAP', 'React'], image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800' },

  // E. AI for Science & Society (37–43)
  { id: 'p-37', title: 'Drug-Discovery-GNN', description: 'Predicting molecular interactions for rapid screening of candidate therapeutic compounds.', category: 'Science & Society', techStack: ['Python', 'PyG', 'Simulation'], image: 'https://images.unsplash.com/photo-1532187875605-2fe35a7f1c9c?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-38', title: 'Med-Fusion-Diagnosis', description: 'Clinical AI for multimodal diagnosis through integration of medical imaging and EHRs.', category: 'Science & Society', techStack: ['Python', 'PyTorch', 'DICOM'], image: 'https://images.unsplash.com/photo-1576091160550-217359f41f48?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-39', title: 'Climate-Forecaster', description: 'Spatiotemporal weather and climate prediction using high-fidelity neural simulators.', category: 'Science & Society', techStack: ['Python', 'JAX', 'NetCDF'], image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-40', title: 'Smart-City-Optim', description: 'Real-time traffic and energy optimization engine for sustainable urban environments.', category: 'Science & Society', techStack: ['Python', 'GCP', 'Kafka'], image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-41', title: 'BCI-Neuro-Sync', description: 'Real-time EEG signal decoding and classification for brain-computer interfacing.', category: 'Science & Society', techStack: ['Python', 'MNE', 'Deep Learning'], image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-42', title: 'Cyber-Threat-Net', description: 'Adversarial machine learning for identifying and mitigating polymorphic network threats.', category: 'Science & Society', techStack: ['Python', 'Scapy', 'AI'], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-43', title: 'Ethic-Audit-Tool', description: 'Framework for auditing AI fairness metrics and identifying bias in algorithmic datasets.', category: 'Science & Society', techStack: ['Python', 'AIF360'], image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800' },

  // F. Frontier / NVIDIA-Level Research (44–50)
  { id: 'p-44', title: 'Video-Diffuser-V3', description: 'High-fidelity video generation using temporal diffusion for cinematic content creation.', category: 'Frontier Research', techStack: ['Python', 'Diffusers', 'CUDA'], image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-45', title: 'Splat-Renderer-Core', description: 'Real-time 3D scene generation and rendering using Gaussian Splatting and NeRF.', category: 'Frontier Research', techStack: ['C++', 'CUDA', 'Python'], image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-46', title: 'Twin-Sim-Engine', description: 'Ultra-accurate virtual environments for training AI agents in industrial simulations.', category: 'Frontier Research', techStack: ['Unreal Engine', 'Python', 'RL'], image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-47', title: 'Robot-End-to-End', description: 'End-to-end learning for autonomous robotic manipulation in unstructured environments.', category: 'Frontier Research', techStack: ['Python', 'ROS', 'PyTorch'], image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-48', title: 'Meta-Learner-Pro', description: 'Adaptive learning systems that generalize to new tasks with minimal supervision.', category: 'Frontier Research', techStack: ['Python', 'JAX'], image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-49', title: 'Modular-AGI-Alpha', description: 'Investigating modular cognitive architectures towards more generalized AI agents.', category: 'Frontier Research', techStack: ['Python', 'Research'], image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800' },
  { id: 'p-50', title: 'Quantum-Inspired-Opt', description: 'Optimization engine utilizing quantum-inspired algorithms for large-scale logistics.', category: 'Frontier Research', techStack: ['C++', 'Python', 'Math'], image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' }
];

export const PAPERS: ResearchPaper[] = [
  // A. Foundation AI & LLM Systems (1–10)
  {
    id: 'r-1',
    title: 'Cross-Modal Representation Learning in Unified Models',
    abstract: 'Investigating the latent space alignment of text, vision, and audio signals for improved multimodal reasoning.',
    insight: 'Achieved SOTA on multimodal benchmarks by implementing a recursive alignment layer that synchronizes feature maps across modalities in real-time. The framework handles asynchronous signal inputs with zero perception drift.',
    date: '2025.01.12',
    type: 'Publication',
    category: 'Foundation AI',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    specifications: [
      'Modalities: Text, Vision, Audio',
      'Accuracy Offset: < 0.1%',
      'Hardware: NVIDIA H100 Cluster',
      'Training Time: 4,200 Node Hours'
    ]
  },
  {
    id: 'r-2',
    title: 'Memory-Augmented Transformers for Continuous Reasoning',
    abstract: 'Extending transformer architectures with external symbolic memory units for long-term knowledge retention.',
    insight: 'Introduced an External Differentiable Memory (EDM) module that allows LLMs to retrieve and store knowledge patterns across sessions. This eliminates the standard context window limitations for continuous research tasks.',
    date: '2025.02.05',
    type: 'Publication',
    category: 'Foundation AI',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800',
    specifications: [
      'Memory Type: EDM v4',
      'Context Cap: Infinite (Streaming)',
      'Persistence: Hard-State Verified',
      'Recall Latency: ~5ms'
    ]
  },
  { id: 'r-3', title: 'Recursive Fact-Checking Pipelines in Generative AI', abstract: 'Implementing self-correcting logic gates to prevent hallucinations in high-fidelity text generation.', insight: 'Developed a dual-path verification system where outputs are cross-referenced against a static knowledge graph in real-time. Reduced logical inconsistency by 92% in expert-level domains.', date: '2024.11.20', type: 'Patent', category: 'Foundation AI', image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-4', title: 'Hybrid Bit-Quantization for Efficient Edge Inference', abstract: 'Optimizing large-scale weights for execution on ultra-low resource hardware without predictive degradation.', insight: 'New 1.5-bit quantization technique optimized for integer-based processors. Enables running 7B models on devices with sub-4GB RAM at 12 tokens/sec.', date: '2025.03.15', type: 'Publication', category: 'Foundation AI', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-5', title: 'Autonomous Hierarchical Planning in Agentic Systems', abstract: 'Exploring multi-level task decomposition and tool usage in autonomous AI agents.', insight: 'Implemented a Hierarchical Task Network (HTN) within an LLM loop, allowing the agent to plan 50+ steps ahead with dynamic error correction based on tool feedback.', date: '2025.04.10', type: 'WIP', category: 'Foundation AI', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-6', title: 'Data Scaling Laws in Synthetic Model Training', abstract: 'Analyzing the performance ceilings of models trained on purely synthetic multi-modal datasets.', insight: 'Found that synthetic data quality surpasses human data at scale if the generator is conditioned on formal verification rules. High-fidelity synthetic datasets lead to faster convergence.', date: '2025.02.28', type: 'Publication', category: 'Foundation AI', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-7', title: 'Direct Preference Optimization for Safety-Critical AI', abstract: 'Implementing DPO variants for better alignment in autonomous safety systems.', insight: 'Replaced traditional RLHF with a more stable DPO-Prime algorithm, ensuring strict adherence to predefined safety constraints without inhibiting creative reasoning under pressure.', date: '2025.01.20', type: 'Publication', category: 'Foundation AI', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-8', title: 'Elastic Weight Consolidation in LLM Lifecycles', abstract: 'Preventing catastrophic forgetting during real-time knowledge injection into foundation models.', insight: 'Developed a dynamic modular weighting system that isolates new knowledge to specific adapters, preserving 99.9% of base model capabilities during continuous updates.', date: '2025.03.02', type: 'Publication', category: 'Foundation AI', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-9', title: 'Neuro-Symbolic Integration for Formal Logic Reasoning', abstract: 'Combining deep learning with symbolic logic for verifiable decision-making processes.', insight: 'The model utilizes a neural frontend for perception and a symbolic backend for reasoning, ensuring all high-level actions can be audited through formal logic traces.', date: '2025.04.22', type: 'Patent', category: 'Foundation AI', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-10', title: 'Flash-Attention for Extreme Context Windows', abstract: 'Optimizing memory usage for transformers processing document sets with millions of tokens.', insight: 'Memory footprint reduced by 8x through a tiled attention mechanism. Successfully processed a 2-million token legal corpus in a single pass with linear time complexity.', date: '2024.12.18', type: 'Publication', category: 'Foundation AI', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },

  // B. Advanced Data Science Systems (11–18)
  { id: 'r-11', title: 'Meta-Learning for Automated Architecture Search', abstract: 'Automating the recruitment of optimal ML architectures for any given tabular or spatial dataset.', insight: 'The Meta-Flux system predicts the best model configuration based on dataset metrics, reducing search time from days to minutes with 99.1% accuracy.', date: '2025.01.30', type: 'Publication', category: 'Data Science', image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-12', title: 'Low-Latency Stream Analysis in Distributed Grids', abstract: 'Optimizing throughput for real-time sensor fusion in large-scale industrial IoT deployments.', insight: 'Achieved sub-10ms end-to-end latency for 10M+ daily events using a custom stream-processing topology on Apache Flink.', date: '2025.02.15', type: 'Patent', category: 'Data Science', image: 'https://images.unsplash.com/photo-1518186239124-797d825c7556?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-13', title: 'Dynamic Graph Learning for Fraud Prevention', abstract: 'Utilizing temporal graph networks to identify evolving patterns in merchant networks.', insight: 'The algorithm detects shadow-nodes and synthetic identities by analyzing the velocity of structural changes in the transaction graph.', date: '2025.03.11', type: 'Publication', category: 'Data Science', image: 'https://images.unsplash.com/photo-1502139173938-c783a718c66e?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-14', title: 'High-Dimensional Causal Graph Discovery', abstract: 'Disentangling correlation from causation in complex feature-rich datasets.', insight: 'Revealed underlying causal drivers in healthcare outcome datasets that were previously masked by significant noise and confounding variables.', date: '2025.04.01', type: 'Publication', category: 'Data Science', image: 'https://images.unsplash.com/photo-1454165833267-02300a498263?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-15', title: 'Data-Centric AI Optimization Strategies', abstract: 'Moving from model-focused to data-focused improvement cycles in production ML.', insight: 'Significant gains achieved by isolating and cleaning "hard-to-learn" samples rather than increasing model complexity. Data cleaning ROI is 3x higher than hyper-param tuning.', date: '2025.05.05', type: 'Publication', category: 'Data Science', image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-16', title: 'Advanced Drift Detection in Real-Time Environments', abstract: 'Monitoring semantic drift in production model embeddings through statistical validation.', insight: 'New JS-divergence metric for real-time drift detection provides 100% recall on covariate shift in financial datasets before performance impact.', date: '2024.12.01', type: 'Patent', category: 'Data Science', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-17', title: 'Privacy-Preserving GANs for Data Synthesis', abstract: 'Generating usable synthetic data under strict epsilon-privacy constraints.', insight: 'The framework enables financial institutions to share training data without exposing individual transaction details, preserving utility for fraud model training.', date: '2025.02.10', type: 'Publication', category: 'Data Science', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-18', title: 'Distributed Feature Learning in Large Feature Stores', abstract: 'Scaling feature engineering across multi-region high-concurrency environments.', insight: 'New caching strategy reduces feature retrieval latency by 45% in production apps handling 100k requests per second.', date: '2025.04.14', type: 'Publication', category: 'Data Science', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800' },

  // C. Quant Finance + AI (19–28)
  { id: 'r-19', title: 'Transformers for Time-Series Alpha Generation', abstract: 'Adapting attention mechanisms to capture high-frequency market dependencies.', insight: 'Temporal-attention outperformed LSTMs by 22% in predicting short-term trend reversals across NYSE equity data.', date: '2025.01.05', type: 'Publication', category: 'Quant Finance', image: 'https://images.unsplash.com/photo-1611974714024-4696144e04f0?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-20', title: 'Risk-Aware Reinforcement Learning for Portfolios', abstract: 'Implementing CVaR-constrained agents for robust multi-asset allocation.', insight: 'The agent provides better protection during black swan events by explicitly penalizing tail-risk in the reward function during training.', date: '2025.02.18', type: 'Publication', category: 'Quant Finance', image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-21', title: 'Micros-Scale Market Simulation on FPGA Hardware', abstract: 'Testing HFT strategies against low-latency synthesized order book data.', insight: 'Hardware-accelerated simulation reduced strategy validation cycles from hours to seconds for microsecond-level execution patterns.', date: '2025.03.22', type: 'Patent', category: 'Quant Finance', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-22', title: 'Deep Stochastic Volatility Prediction Models', abstract: 'Modeling volatility surfaces through high-dimensional neural PDE solvers.', insight: 'New neural-SDE approach captures local-stochastic volatility dynamics more accurately than standard Black-Scholes variants for extreme tails.', date: '2025.04.05', type: 'Publication', category: 'Quant Finance', image: 'https://images.unsplash.com/photo-1535320485706-44d43b91d530?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-23', title: 'Price Formation Dynamics at the Order Book Level', abstract: 'Analyzing liquidity provision and predatory trading through deep learning.', insight: 'Identified specific order-flow toxicity markers that precede significant liquidity drains in thin crypto markets.', date: '2025.05.01', type: 'Publication', category: 'Quant Finance', image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-24', title: 'Multimodal Sentiment Analysis for Market Edge', abstract: 'Fusing audio, text, and visual data for predictive financial sentiment analysis.', insight: 'Fusing visual trader behavior with news text improved day-trading predictive accuracy by 14% on volatile asset classes.', date: '2024.11.15', type: 'Publication', category: 'Quant Finance', image: 'https://images.unsplash.com/photo-1512428559083-a45e94e43e4a?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-25', title: 'Graph Anomaly Detection in Global Finance Nodes', abstract: 'Finding subtle money laundering patterns through structural graph analysis.', insight: 'The system uncovered previously undetected layering cycles involving 500+ accounts across 12 countries.', date: '2025.01.25', type: 'Patent', category: 'Quant Finance', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-26', title: 'Derivative Hedging through Deep Primal-Dual Slopes', abstract: 'Optimizing options hedging using non-linear neural approximations.', insight: 'Deep-hedging model outperformed traditional Delta-hedging across 1,000 simulations containing high-volatility shocks.', date: '2025.03.30', type: 'Publication', category: 'Quant Finance', image: 'https://images.unsplash.com/photo-1535320485706-44d43b91d530?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-27', title: 'Uncertainty Quantification in Financial Risk Models', abstract: 'Utilizing Bayesian neural networks for reliable value-at-risk estimation.', insight: 'The model provides confidence intervals that correctly predicted the market sell-off in Q1 2025 within a 95% credible range.', date: '2025.04.18', type: 'Publication', category: 'Quant Finance', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-28', title: 'Multi-Agent Strategic Equilibrium in Trading Bots', abstract: 'Training competing trading agents through game-theoretic RL frameworks.', insight: 'Found that bots training in adversarial multi-agent settings develop superior defensive liquidity strategies.', date: '2025.05.12', type: 'WIP', category: 'Quant Finance', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800' },

  // D. AI Systems + Infrastructure (29–36)
  { id: 'r-29', title: 'Collective Optimization for Distributed Model Training', abstract: 'Optimizing network utilization in multi-GPU high-concurrency environments.', insight: 'Custom NCCL-based communication primitive achieved 95% scaling efficiency across 128 multi-GPU nodes.', date: '2025.01.10', type: 'Publication', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-30', title: 'Throughput Optimization in Global Model Serving', abstract: 'Maximizing inference requests per second through dynamic batching strategies.', insight: 'The system optimized serving throughput by 3.5x for latency-sensitive API clients through intelligent request queuing.', date: '2025.02.05', type: 'Patent', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-31', title: 'Memory-Efficient Kernels for Custom Transformer Layers', abstract: 'Custom CUDA kernels for next-generation attention mechanisms.', insight: 'Reduced memory overhead by 40% for extremely long context context processing kernels.', date: '2025.03.18', type: 'Publication', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-32', title: 'Auto-Scaling AI Workloads in K8s Environments', abstract: 'Dynamic resource allocation based on model-specific telemetry.', insight: 'Reduced infrastructure costs by 22% while maintaining sub-100ms P99 latency targets.', date: '2025.04.11', type: 'Publication', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-33', title: 'Energy-Efficient Models for Edge Inference', abstract: 'Targeting sub-watt power consumption for always-on visual AI tasks.', insight: 'Optimized MobileNet architecture achieved 92.1% accuracy on sub-200mW hardware configurations.', date: '2025.05.02', type: 'Publication', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-34', title: 'Secure Aggregation in Federated Learning Networks', abstract: 'Protecting individual data privacy during global weight updates.', insight: 'Proven differential privacy guarantees with zero accuracy loss for distributed financial datasets.', date: '2025.05.15', type: 'Patent', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-35', title: 'Differential Privacy Strategies for Massive Datasets', abstract: 'Scaling private data collection for foundation model fine-tuning.', insight: 'High-utility privacy masks enable training on sensitive medical records with no individual re-identification risk.', date: '2024.12.14', type: 'Publication', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-36', title: 'Explainability in High-Throughput Production AI', abstract: 'Real-time feature attribution and explanation for automated decisions.', insight: 'Integrated LIME/SHAP approximations into the serving layer with negligible performance overhead.', date: '2025.01.20', type: 'Publication', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800' },

  // E. AI for Science & Society (37–43)
  { id: 'r-37', title: 'Chemical Space Exploration via Diffusion Models', abstract: 'Targeting novel molecular structures for pharmaceutical discovery.', insight: 'Identified 4 candidate compounds for anti-viral research that were previously unmapped in standard libraries.', date: '2025.02.12', type: 'Publication', category: 'Science & Society', image: 'https://images.unsplash.com/photo-1532187875605-2fe35a7f1c9c?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-38', title: 'Multimodal Data Fusion in Clinical Diagnostic Assistants', abstract: 'Improving diagnostic accuracy through joint imaging and record analysis.', insight: 'Joint imaging-text analysis improved early-stage cancer detection rates by 9.4% in clinical trials.', date: '2025.03.05', type: 'Publication', category: 'Science & Society', image: 'https://images.unsplash.com/photo-1576091160550-217359f41f48?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-39', title: 'Neural Simulators for Extreme Weather Event Prediction', abstract: 'Modeling hurricanes and wildfires through high-fidelity spatiotemporal learning.', insight: 'Predicted the track of Cyclone Zeta with 3x higher accuracy than traditional numerical weather models.', date: '2025.04.14', type: 'Patent', category: 'Science & Society', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-40', title: 'Sustainable Traffic Optimization through Reinforcement Learning', abstract: 'Reducing urban carbon emissions via real-time signal phase and timing control.', insight: 'Pilot deployment reduced peak-hour traffic idling time by 28% in major metro arteries.', date: '2025.05.02', type: 'Publication', category: 'Science & Society', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-41', title: 'EEG Signal Decoding for BCI with Minimal Calibration', abstract: 'Expanding the utility of brain-computer interfaces for consumer hardware.', insight: 'Achieved 94.2% classification accuracy with only 60 seconds of user-specific calibration.', date: '2025.05.20', type: 'Publication', category: 'Science & Society', image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-42', title: 'Adversarial Threat Detection in Large Enterprise Networks', abstract: 'Mitigating polymorphic malware through deep structural anomaly detection.', insight: 'Uncovered a dormant zero-day persistent threat by analyzing subtle shifts in cross-node communication frequency.', date: '2024.11.22', type: 'Publication', category: 'Science & Society', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-43', title: 'Algorithmic Fairness Auditing in Social Datasets', abstract: 'Identifying and correcting for racial and gender bias in automated credit scoring.', insight: 'Implemented negative-constraint optimization to ensure 100% parity across demographic subgroups without significant accuracy loss.', date: '2025.01.12', type: 'Patent', category: 'Science & Society', image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800' },

  // F. Frontier / NVIDIA-Level Research (44–50)
  { id: 'r-44', title: 'Temporal Diffusion for Cinematic Video Synthesis', abstract: 'Achieving frame-to-frame coherence in extreme high-resolution video generation.', insight: 'Introduced a novel Temporal Attention Graph (TAG) that preserves object identity across long-form video clips.', date: '2025.02.18', type: 'Publication', category: 'Frontier Research', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-45', title: 'Gaussian Splatting for Real-Time 3D Environment Mapping', abstract: 'Dynamic scene reconstruction from video feeds for autonomous navigation.', insight: 'Real-time scene splitting and splatting achieved photorealistic rendering at 120 FPS on standard consumer GPUs.', date: '2025.03.22', type: 'Publication', category: 'Frontier Research', image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-46', title: 'Industrial Digital Twins as High-Fidelity Training Grounds', abstract: 'Sim-to-real transfer optimization for collaborative industrial robots.', insight: 'Achieved 99.8% transfer success from virtual simulations to physical robotic hardware deployments.', date: '2025.04.05', type: 'Publication', category: 'Frontier Research', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-47', title: 'End-to-End Behavioral Cloning for Complex Manipulation', abstract: 'Direct training of robotic policies from sensory input to actuator velocity.', insight: 'Robot learned to assemble multi-part components by observing only 200 human demonstrations with 95% repeatable success.', date: '2025.05.01', type: 'Publication', category: 'Frontier Research', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-48', title: 'Few-Shot Meta-Learning in Dynamic Learning Environments', abstract: 'Accelerating model adaptation through task-agnostic meta-representational learning.', insight: 'The Meta-Pro architecture adapts to new languages and domains with as few as 5 examples, surpassing standard few-shot baselines by 18%.', date: '2025.05.18', type: 'WIP', category: 'Frontier Research', image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-49', title: 'Modular Cognitive Architectures for Generalized Intelligence', abstract: 'Investigating routing mechanisms between specialized neural modules.', insight: 'Developed a dynamic gating system that routes queries to optimal modules, increasing overall model efficiency by 10x for out-of-distribution tasks.', date: '2025.06.01', type: 'Publication', category: 'Frontier Research', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800' },
  { id: 'r-50', title: 'Quantum-Inspired Optimization for Massive Logistics Networks', abstract: 'Solving NP-hard problems on classical hardware through tensor-network models.', insight: 'Reduced network routing costs by 14% for a global logistics provider through quantum-inspired annealing on standard cloud instances.', date: '2025.05.28', type: 'Publication', category: 'Frontier Research', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' }
];

export const TEAM: TeamMember[] = [
  {
    id: 't-1',
    name: 'Koushik Paul',
    role: 'CEO / Head of Operations',
    skills: ['Strategic Intelligence', 'Lab Directing', 'Deep Tech Strategy'],
    bio: 'Architecting the operational foundations of NeuroNova Lab with a focus on global scalability and ethical AI deployment. Overseeing the integration of neural theory into enterprise-level solutions.',
    focusAreas: [
      'Global Scaling Infrastructure',
      'Ethical AI Governance Frameworks',
      'Strategic Resource Allocation',
      'Enterprise Neural Theory Integration'
    ]
  },
  {
    id: 't-2',
    name: 'Sourish Dey',
    role: 'CTO / Lead Data Scientist',
    skills: ['Quant Finance', 'Predictive Modeling', 'Distributed Computing'],
    bio: 'Expert in high-frequency trading algorithms and large-scale data synthesis. Leading technical innovations in neural-market intersections and quantitative alpha generation.',
    focusAreas: [
      'Neural-Market Intersection Theory',
      'HFT Strategy Optimization',
      'Large-Scale Predictive Synthesis',
      'Distributed Cognitive Computing'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b-1',
    title: 'Cognitive Ignition: The Ethics of AGl',
    excerpt: 'Defining the boundary between machine intelligence and biological intuition.',
    category: 'Philosophy',
    date: '2024.12.01',
    author: 'NeuroNova R&D',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    content: 'As we approach the horizon of Artificial General Intelligence, the distinction between silicon-based logic and biological intuition begins to blur. At NeuroNova, we define "Cognitive Ignition" as the moment a neural architecture exhibits self-directed curiousity. Our ethical framework mandates that any such spark is contained within a "Recursive Safety Vault" to ensure alignment with human flourishing.',
    specifications: [
      'Auth Type: Neural Signature',
      'Protocol: ETH-GATE v2',
      'Containment: Level 5',
      'Safety Index: 99.9%'
    ]
  },
  {
    id: 'b-2',
    title: 'The Edge Protocol',
    excerpt: 'How we shifted 90% of our inference to decentralized local nodes.',
    category: 'Infrastructure',
    date: '2025.01.20',
    author: 'Infrastructure Team',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    content: 'Centralized compute is becoming a bottleneck for planetary-scale AI. NeuroNova has deployed "The Edge Protocol", a decentralized mesh of lightweight inference nodes. By utilizing sub-10W hardware for local reasoning, we have reduced global latency by 85% while ensuring total data sovereignty for all end nodes.',
    specifications: [
      'Node Type: Carbon-Lattice',
      'Mesh Range: Global',
      'Encryption: Lattice-Based',
      'Power: < 10W'
    ]
  }
];
