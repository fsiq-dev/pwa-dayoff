import { memo, useEffect, useState } from 'react';
import { Row, Col, Spin, Card, Space } from 'antd';
import getNews from '../services/api';

const { Meta } = Card;

function Home () {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(news)

   
    useEffect(() => {
        setLoading(true)
        Promise.all([getNews()]).then((response: any) => {
            setNews(response[0].results)
            setLoading(false)
        })
    }, [])

    return (
      <div>
        <Spin spinning={loading} />
        <Row gutter={[16, 16]}>
          <Col span={24} md={16}>
            <h2>Pokedex</h2>
            <Space
              direction='vertical'
              size='middle'
              style={{ display: "flex" }}
            >
              {news?.map((item: any, key) => (
                <Card key={key}>
                  <Meta title={item.name} description={item?.url} />
                </Card>
              ))}
            </Space>
          </Col>
        </Row>
      </div>
    )

}

export default memo(Home);