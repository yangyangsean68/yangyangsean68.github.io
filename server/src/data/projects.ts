import type { Project } from '../models/project.ts'

export const projects: Project[] = [
  {
    id: 'hex-router',
    title: '高速路由守护进程',
    summary: '面向 eBPF 卸载的高吞吐 BGP/MPLS 路由守护进程。',
    description:
      '数据包从网卡经 XDP 进入每核环形缓冲。尽量在内核态完成丢弃或转发，把延迟压下去。',
    tags: ['Rust', 'eBPF', 'UDP'],
    year: 2026,
    status: 'ACTIVE',
    schematicLabel: '示意图：入口 / 环形缓冲',
    schematic: `┌── eth0 ──┐  ==[eBPF]==>  ┌─ RingBuf ─┐
│ 100 Gbps │ ──[XDP_DROP]──│ Core 0..7 │
└──────────┘  ==[PACKET]==> └──────────┘`,
    pid: '1042',
    mode: 'r-xr-xr-x',
  },
  {
    id: 'cyber-shell',
    title: '分布式伪终端',
    summary: '带会话签名的点对点伪终端模拟器。',
    description:
      '对端用密钥证明操作者身份，壳本身仍是普通 UNIX tty。',
    tags: ['Zig', 'TTY', '加密'],
    year: 2026,
    status: 'ACTIVE',
    schematicLabel: '示意图：会话通道',
    schematic: `[CLI_TTY] ◄──(ed25519)──► [ECDH P2P]
  │                             │
  └─── /dev/ptmx ◄=== pty ===► ─┘`,
    pid: '2841',
    mode: 'rwxr-xr--',
  },
  {
    id: 'kernel-telemetry',
    title: '内核遥测',
    summary: '面向 Linux 6.x 的实时系统调用剖析与火焰图。',
    description:
      '在系统调用进入/退出点挂钩，数据进环形缓冲，再经 WebSocket 推给前端画图。',
    tags: ['C', 'kprobes', 'perf'],
    year: 2025,
    status: 'ACTIVE',
    schematicLabel: '示意图：探针矩阵',
    schematic: `SYS_ENTER ─► [ kprobe ] ─► Ring Buffer
                │
SYS_EXIT  ─► [ kret   ] ──► WS Broadcast`,
    pid: '3319',
    mode: 'rw-r--r--',
  },
  {
    id: 'dist-kv-store',
    title: '分布式键值存储',
    summary: '针对 NVMe 队列优化的 Raft 日志结构存储引擎。',
    description:
      '领导者追加日志，跟随者确认，io_uring 提交 WAL。一个吵闹但认真的小 KV。',
    tags: ['Rust', 'Raft', 'gRPC'],
    year: 2025,
    status: 'ACTIVE',
    schematicLabel: '示意图：共识',
    schematic: `NODE_A (Leader) ◄──AppendEntries──► NODE_B
   │
   └──► io_uring WAL Disk Commit [OK]`,
    pid: '4902',
    mode: 'rwxr-xr-x',
  },
  {
    id: 'synapse-asic',
    title: '张量加速器',
    summary: '可综合的 Verilog 矩阵张量加速器，目标 Spartan-7 FPGA。',
    description: '片上脉动阵列做乘加，外面挂一条 PCIe 接口。',
    tags: ['Verilog', 'FPGA', 'PCIe'],
    year: 2025,
    status: 'ACTIVE',
    schematicLabel: '示意图：脉动阵列',
    schematic: `  IN_A ─► [ PE_00 ] ─► [ PE_01 ] ─► OUT_0
  IN_B ─► [ PE_10 ] ─► [ PE_11 ] ─► OUT_1`,
    pid: '5122',
    mode: 'r-xr-xr-x',
  },
  {
    id: 'vault-guard',
    title: '密闭校验器',
    summary: '用零知识证明校验内存边界不可变的飞地。',
    description: '密封内存区。认证通过前预览保持关闭。',
    tags: ['C++20', 'SGX', '汇编'],
    year: 2024,
    status: 'STANDBY',
    schematicLabel: '预览关闭 // 密封内存',
    schematic: `[ENCLAVE: 0x7FFF0000] ──[LOCKED]──┐
  │ PRIV_KEY ATTESTATION REQUIRED │
  └───────────────────────────────┘`,
    pid: '6710',
    mode: 'r--------',
  },
]
