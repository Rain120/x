import { Flex, Skeleton, Spin } from 'antd';
import { useLocation } from 'dumi';
import React from 'react';

const Loading: React.FC = () => {
  const { pathname } = useLocation();
  if (
    pathname.startsWith('/components') ||
    pathname.startsWith('/docs') ||
    pathname.startsWith('/changelog')
  ) {
    return (
      <div style={{ maxWidth: '70vw', width: '100%', margin: '80px auto 0', textAlign: 'center' }}>
        <img
          src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*eco6RrQhxbMAAAAAAAAAAAAADgCCAQ/original"
          width={40}
          alt="loading"
          style={{ marginBottom: 24, filter: 'grayscale(1)', opacity: 0.33 }}
        />
        <Skeleton active paragraph={{ rows: 3 }} />
        <Skeleton active paragraph={{ rows: 4 }} style={{ marginTop: 32 }} />
      </div>
    );
  }

  return (
    <Flex justify="center" align="center" gap="small" style={{ width: '100%', margin: '120px 0' }}>
      <Spin size="large" />
    </Flex>
  );
};

export default Loading;
