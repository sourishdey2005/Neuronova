import { useState } from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '../types';
import { DetailOverlay } from '../components/DetailOverlay';

export const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20">
        <h1 className="text-6xl font-display mb-4">COGNITIVE <span className="text-white/20">LOGS</span></h1>
        <p className="text-gray-400 font-mono text-sm max-w-lg">
          Dispatches from the bleeding edge of AI research, methodology, and lab breakthroughs.
        </p>
      </div>

      <div className="grid gap-6">
        {BLOG_POSTS.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedPost(post)}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 tech-border glass-card hover:bg-white/[0.04] transition-all cursor-pointer"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">{post.category}</span>
                <span className="text-gray-600 font-mono text-[10px]">— {post.date}</span>
              </div>
              <h2 className="text-2xl font-display mb-3 group-hover:text-white transition-colors uppercase font-bold">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 md:mb-0">
                {post.excerpt}
              </p>
            </div>
            
            <div className="flex flex-col items-end gap-4 min-w-[200px]">
              <span className="text-[10px] font-mono text-gray-600 uppercase">ARCHIVED BY {post.author.toUpperCase()}</span>
              <button className="flex items-center gap-2 text-xs font-mono text-white group-hover:text-cyan-400 transition-colors">
                READ LOG <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <DetailOverlay
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        title={selectedPost?.title || ''}
        category={selectedPost?.category}
        content={selectedPost?.content || selectedPost?.excerpt || ''}
        specifications={selectedPost?.specifications}
      />
    </div>
  );
};
