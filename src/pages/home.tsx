import { memo, useEffect, useState } from 'react';
import { Row, Col, Spin, Card, Space } from 'antd';
import getNews from '../services/api';

const { Meta } = Card;

function Home () {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)

   
    useEffect(() => {
        setLoading(true)
        Promise.all([getNews()]).then((response) => {
            setNews(response[0].articles)
            setLoading(false)
        })
    }, [])

    return (
      <div>
        <Spin spinning={loading} />
        <Row gutter={[16, 16]}>
          <Col span={24} md={16}>
            <h2>News</h2>
            <Space
              direction='vertical'
              size='middle'
              style={{ display: "flex" }}
            >
              {news?.map((item: any) => (
                <Card>
                  <Meta title={item.title} description={item?.content} />
                </Card>
              ))}
            </Space>
          </Col>
        </Row>
      </div>
    )

}

export default memo(Home);